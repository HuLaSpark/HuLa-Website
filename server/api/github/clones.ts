// 服务器端 API 路由：获取 GitHub releases 下载量统计数据
// 添加了 30 分钟缓存机制

// 内存缓存
const cache: {
  data?: { count: number; timestamp: number }
} = {}

const CACHE_DURATION = 30 * 60 * 1000 // 30 分钟（毫秒）

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const githubToken = config.githubToken || process.env.TOTAL_COUNT_TOKEN

  // 检查缓存
  const now = Date.now()
  if (cache.data && (now - cache.data.timestamp) < CACHE_DURATION) {
    return {
      success: true,
      count: cache.data.count,
      cached: true
    }
  }

  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }

    // 如果有 token，添加到请求头中（可以提高速率限制）
    if (githubToken) {
      headers.Authorization = `Bearer ${githubToken}`
    }

    let totalDownloads = 0
    let page = 1
    let hasMore = true

    // 限制最多获取前10页，避免请求过多
    while (hasMore && page <= 10) {
      const response = await fetch(
        `https://api.github.com/repos/HuLaSpark/HuLa/releases?per_page=100&page=${page}`,
        { headers }
      )

      if (response.ok) {
        const data = await response.json()
        if (data.length === 0) {
          hasMore = false
        } else {
          // 遍历每个 release 的所有 assets
          data.forEach((release: any) => {
            if (release.assets && release.assets.length > 0) {
              release.assets.forEach((asset: any) => {
                totalDownloads += asset.download_count || 0
              })
            }
          })

          // 如果返回的数据少于100条，说明已经是最后一页
          if (data.length < 100) {
            hasMore = false
          } else {
            page++
          }
        }
      } else if (response.status === 403) {
        // 速率限制，返回已获取的数据（如果有）
        hasMore = false
      } else {
        throw createError({
          statusCode: response.status,
          statusMessage: `GitHub API 请求失败: ${response.statusText}`
        })
      }
    }

    // 更新缓存
    cache.data = {
      count: totalDownloads,
      timestamp: now
    }

    return {
      success: true,
      count: totalDownloads,
      cached: false
    }
  } catch (error: any) {
    // 如果出错但有缓存数据，返回缓存数据
    if (cache.data) {
      return {
        success: true,
        count: cache.data.count,
        cached: true,
        error: error.message
      }
    }

    // 如果是我们创建的错误，直接抛出
    if (error.statusCode) {
      throw error
    }

    // 其他错误
    throw createError({
      statusCode: 500,
      statusMessage: `获取 releases 下载量失败: ${error.message}`
    })
  }
})

