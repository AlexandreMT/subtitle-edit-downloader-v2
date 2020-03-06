import {
  fetchLatestRelease,
  showLatestReleaseAndSelectAsset,
  downloadAsset
} from './modules/Releases'

(async function start() {
  const latestRelease = await fetchLatestRelease()
  const selectedAsset = await showLatestReleaseAndSelectAsset(latestRelease)
  await downloadAsset(selectedAsset)
})()
