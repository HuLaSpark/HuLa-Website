// 服务器端 API 路由：获取 GitHub 仓库贡献者数量

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

    let contributors = 0
    let page = 1
    let hasMore = true

    while (hasMore) {
      const response = await fetch(
        `https://api.github.com/repos/HuLaSpark/HuLa/contributors?per_page=100&page=${page}&anon=1`,
        { headers }
      )
      
      if (response.ok) {
        const data = await response.json()
        if (data.length === 0) {
          hasMore = false
        } else {
          contributors += data.length
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
      count: contributors
    }
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: `获取贡献者数量失败: ${error.message}`
    })
  }
})

