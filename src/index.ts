import {
  fetchLatestRelease,
  showLatestReleaseAndSelectAsset,
  downloadAsset
} from './modules/releases'
import { unzipDownloadedAsset } from './modules/unzipper'

(async function start() {
  const latestRelease = await fetchLatestRelease()
  const selectedAsset = await showLatestReleaseAndSelectAsset(latestRelease)
  await downloadAsset(selectedAsset)
  await unzipDownloadedAsset(selectedAsset)
})()
