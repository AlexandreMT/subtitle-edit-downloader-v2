import unzipper from 'unzipper'
import inquirer from 'inquirer'
import ora from 'ora'
import fs from 'fs'
import path from 'path'

export const unzipDownloadedAsset = async (selectedAsset: string): Promise<void> => {
  const { unzipAsset } = await inquirer.prompt({
    name: 'unzipAsset', message: 'Would you like to unzip the file?', type: 'confirm'
  })

  if (!unzipAsset) return

  const spinner = ora('Unzipping file...').start()
  await new Promise((resolve) => {
    fs.createReadStream(path.resolve(__dirname, selectedAsset))
      .pipe(unzipper.Extract({ path: path.resolve(__dirname) })
      .on('close', () => resolve(spinner.succeed('Awesome! Your Subtitle Edit has been downloaded :)'))))
  })
}

export const deleteDownloadedAsset = async (selectedAsset: string): Promise<void> => {
  const { deleteDownloadedAsset } = await inquirer.prompt({
    name: 'deleteDownloadedAsset', message: 'Would you like to delete the file?', type: 'confirm'
  })

  if (!deleteDownloadedAsset) process.exit()

  const spinner = ora('Deleting file...').start()
  await new Promise((resolve) => {
    fs.unlink(path.resolve(__dirname, selectedAsset), (error) => {
      if (error) process.exit()
      resolve(spinner.succeed())
    })
  })
}
