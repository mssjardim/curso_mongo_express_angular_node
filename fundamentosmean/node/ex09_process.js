process.stdout.write('Está gostando do curso? ')
process.stdin.on('data', function(data) {
  process.stdout.write(`Sua respota foi ${data.toString()}Obrigado!\n`)
  process.exit()
})
