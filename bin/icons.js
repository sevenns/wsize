const ora = require('ora')
const chalk = require('chalk')
const clear = require('clear')
const paths = require('../config/paths')
const exec = require('executive')

const spinner = ora()
const filename = 'sprites.svg'
const inputPath = `${paths.client}/icons`
const outputPath = `${paths.images}/${filename}`
const commands = {
  svgo: `svgo -f ${inputPath}`,
  generate: `svg-sprite-generate -d ${inputPath} -o ${outputPath}`
}

clear()

spinner.start(chalk.cyan.bold('Icons optimization...\n'))

exec.quiet(commands.svgo).then(() => {
  spinner.succeed(chalk.green.bold('Icons optimization complete.\n'))

  spinner.start(chalk.cyan.bold('Generating icons sprite...\n'))

  exec.quiet(commands.generate).then(() => {
    spinner.succeed(chalk.green.bold('Generating icons sprite complete.\n'))
  })
})
