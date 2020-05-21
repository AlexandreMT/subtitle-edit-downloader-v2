import unzipper from 'unzipper'
import inquirer from 'inquirer'
import ora from 'ora'
import fs from 'fs'
import path from 'path'

export const unzipDownloadedAsset = async (selectedAsset: string): Promise<void> => {
  const { unzipAsset } = await inquirer.prompt({
    name: 'unzipAsset', message: 'Would you like to unzip the file?', type: 'confirm'
  })

  if (!unzipAsset) process.exit()

  const spinner = ora('Unzipping file...').start()
  await new Promise((resolve) => {
    fs.createReadStream(path.resolve(__dirname, selectedAsset))
      .pipe(unzipper.Extract({ path: path.resolve(__dirname) })
      .on('close', () => resolve(spinner.stop())))
  })
}
