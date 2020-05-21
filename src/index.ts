import {
  fetchLatestRelease,
  showLatestReleaseAndSelectAsset,
  downloadAsset
} from './modules/releases'
import { unzipDownloadedAsset, deleteDownloadedAsset } from './modules/file'

(async function start() {
  const latestRelease = await fetchLatestRelease()
  const selectedAsset = await showLatestReleaseAndSelectAsset(latestRelease)
  await downloadAsset(selectedAsset)
  await unzipDownloadedAsset(selectedAsset)
  await deleteDownloadedAsset(selectedAsset)
})()
