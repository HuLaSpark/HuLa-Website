// 服务器端 API 路由：获取 GitHub 仓库提交数量

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const githubToken = config.githubToken || process.env.TOTAL_COUNT_TOKEN

  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }

    // 如果有 token，添加到请求头中（可以提高速率限制）
    if (githubToken) {
      headers.Authorization = `Bearer ${githubToken}`
    }

    let commits = 0
    let page = 1
    let hasMore = true
    const maxPages = 30 // 限制最多30页，避免请求过多

    while (hasMore && page <= maxPages) {
      const response = await fetch(
        `https://api.github.com/repos/HuLaSpark/HuLa/commits?per_page=100&page=${page}`,
        { headers }
      )
      
      if (response.ok) {
        const data = await response.json()
        if (data.length === 0) {
          hasMore = false
        } else {
          commits += data.length
          // 如果返回的数据少于100条，说明已经是最后一页
          if (data.length < 100) {
            hasMore = false
          } else {
            page++
          }
        }
      } else if (response.status === 403) {
        // 速率限制，返回已获取的数据
        hasMore = false
      } else {
        throw createError({
          statusCode: response.status,
          statusMessage: `GitHub API 请求失败: ${response.statusText}`
        })
      }
    }

    return {
      success: true,
      count: commits
    }
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: `获取提交数量失败: ${error.message}`
    })
  }
})

