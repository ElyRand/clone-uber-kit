import { readFileSync, realpathSync } from 'node:fs'
import { isAbsolute, relative, resolve } from 'node:path'
export function document(path: string): string {
  const root = realpathSync(process.cwd())
  const absolute = realpathSync(resolve(root, path))
  const inside = relative(root, absolute)
  if (inside.startsWith('..') || isAbsolute(inside))
    throw new Error('Document hors dépôt')
  return readFileSync(absolute, 'utf8')
}
export function plain(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
}
