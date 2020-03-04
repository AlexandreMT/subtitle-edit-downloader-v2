import inquirer from 'inquirer';
import GitHubLib from '../lib/GitHub.lib'
import ora from 'ora'
import { mLatestRelease } from '../config/Consts';

export const fetchLatestRelease = async (): Promise<any> => {
  const { fetchLatestRelease } = await inquirer.prompt({
    name: 'fetchLatestRelease', message: 'Fetch lastest release?', type: 'confirm'
  })

  if (!fetchLatestRelease) process.exit()

  const spinner = ora('Fetching latest release...').start()
  const latestRelease = await GitHubLib.fetchLatestRelease()
  spinner.succeed().stop()

  return latestRelease
}

export const showLatestReleaseAndSelectAsset = async (latestRelease: any): Promise<any> => {
  const { listAssets } = await inquirer.prompt({
    name: 'listAssets',
    message: mLatestRelease(latestRelease.name, latestRelease.created_at),
    type: 'confirm'
  })

  if (!listAssets) process.exit()

  const assets = latestRelease.assets.map((asset: any) => {
    return `${asset.name} - Updated at: ${asset.updated_at}`;
  });

  assets.push('Exit')

  const { selectedAsset } = await inquirer.prompt({
    name: 'selectedAsset',
    message: 'Select asset',
    type: 'list',
    choices: assets
  })

  if (selectedAsset === 'Exit') process.exit()

  return selectedAsset.split(' - ')[0].trim();
}
