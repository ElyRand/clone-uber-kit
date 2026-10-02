import { readFileSync } from 'node:fs'
export function selectedModules(value) {
  const text = value.trim()
  if (!/^(?:[0-9]|1[0-2])$/.test(text)) throw new Error('Le module cible doit être un entier de 0 à 12.')
  return Array.from({ length: Number(text) }, (_, index) => index + 1)
}
if (process.argv[2]) {
  const module = selectedModules(readFileSync(process.argv[2], 'utf8'))
  console.log(`matrix=${JSON.stringify({ module })}`)
  console.log(`active=${module.length > 0}`)
}
