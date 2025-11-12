// 服务器端 API 路由：获取 GitHub 仓库信息（Stars 等）

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

    const response = await fetch('https://api.github.com/repos/HuLaSpark/HuLa', {
      headers
    })

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: `GitHub API 请求失败: ${response.statusText}`
      })
    }

    const data = await response.json()
    
    return {
      success: true,
      stars: data.stargazers_count || 0,
      forks: data.forks_count || 0,
      watchers: data.watchers_count || 0
    }
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: `获取仓库信息失败: ${error.message}`
    })
  }
})

