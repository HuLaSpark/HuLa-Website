// GitHub 统计数据缓存工具

export interface CachedStats {
  stars: number
  commits: number
  contributors: number
  downloads: number
  timestamp: number
}

const CACHE_KEY = 'github_stats_cache'
const CACHE_DURATION = 30 * 60 * 1000 // 30 分钟（毫秒）

/**
 * 从 localStorage 读取缓存（不检查过期，由调用方判断）
 */
export const getCachedStats = (): CachedStats | null => {
  if (typeof window === 'undefined') return null
  
  try {
    const cached = localStorage.getItem(CACHE_KEY)
    if (!cached) return null
    
    const data: CachedStats = JSON.parse(cached)
    return data
  } catch (error) {
    console.error('读取缓存失败:', error)
    return null
  }
}

/**
 * 检查缓存是否过期
 */
export const isCacheExpired = (cached: CachedStats): boolean => {
  const now = Date.now()
  return (now - cached.timestamp) >= CACHE_DURATION
}

/**
 * 保存到 localStorage
 */
export const saveCachedStats = (stats: Omit<CachedStats, 'timestamp'>) => {
  if (typeof window === 'undefined') return
  
  try {
    const data: CachedStats = {
      ...stats,
      timestamp: Date.now()
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('保存缓存失败:', error)
  }
}

/**
 * 清除缓存
 */
export const clearCachedStats = () => {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.removeItem(CACHE_KEY)
  } catch (error) {
    console.error('清除缓存失败:', error)
  }
}

