import {
  fetchLatestRelease,
  showLatestReleaseAndSelectAsset
} from './modules/Releases'

(async function start() {
  const latestRelease = await fetchLatestRelease()
  const selectedAsset = await showLatestReleaseAndSelectAsset(latestRelease)

  console.log(selectedAsset)
})()
