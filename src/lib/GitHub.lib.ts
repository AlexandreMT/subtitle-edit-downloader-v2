import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { GITHUB_API_BASE_URL } from '../config/environment/Env'
import { sleep } from '../config/Consts'


class GitHubLib {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: GITHUB_API_BASE_URL
    })
  }

  private async get(path: string, query = ''): Promise<AxiosResponse> {
    try {
      return await this.api.get(`${path}?${query}`)
    } catch (error) {
      console.log('Error on fetch latest release. Closing in 10 seconds.')
      await sleep(10)
      process.exit(1)
    }
  }

  public async fetchLatestRelease(): Promise<any> {
    return (await this.get(`/repos/SubtitleEdit/subtitleedit/releases/latest`)).data
  }
}

export default new GitHubLib();
