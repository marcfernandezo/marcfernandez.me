const GITHUB_API = 'https://api.github.com'
const GITHUB_USERNAME = 'marcfernandezo'

export interface GitHubRepository {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
  fork: boolean
  archived: boolean
  language: string | null
}

export function getGitHubHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN
  if (!token) throw new Error('GITHUB_TOKEN is not set')

  return {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
  }
}

export function filterAndRankRepos(repos: GitHubRepository[]): GitHubRepository[] {
  return repos
    .filter((r) => !r.fork && !r.archived && r.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count) // Filter by stars
    .slice(0, 6)
}

export async function fetchRepositories(): Promise<GitHubRepository[]> {
  let res: Response

  try {
    res = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers: getGitHubHeaders(),
        next: { revalidate: 3600 },
      }
    )
  } catch (err) {
    console.error('[GitHub] Network error:', err)
    return []
  }

  if (res.status === 401) {
    console.error('[GitHub] Invalid or expired token')
    return []
  }

  if (res.status === 403) {
    const remaining = res.headers.get('x-ratelimit-remaining')
    const reset = res.headers.get('x-ratelimit-reset')
    console.error(`[GitHub] Rate limited — remaining: ${remaining}, resets at: ${new Date(Number(reset) * 1000).toISOString()}`)
    return []
  }

  if (!res.ok) {
    console.error(`[GitHub] Unexpected error: ${res.status} ${res.statusText}`)
    return []
  }

  const repos: GitHubRepository[] = await res.json()
  return filterAndRankRepos(repos)
}