import fs from 'fs'
import path from 'path'

const DATA_PATH = path.join(process.cwd(), 'lib', 'data.json')

export function readData() {
  const raw = fs.readFileSync(DATA_PATH, 'utf-8')
  return JSON.parse(raw)
}

export function writeData(data: object) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8')
}

export function generateId(prefix: string) {
  return `${prefix}-${Date.now()}`
}
