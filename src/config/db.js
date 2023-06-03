import { dirname, join } from 'path'
import { open } from 'sqlite'
import sqlite from 'sqlite3'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const openDB = async () => {
  const filename = join(__dirname, '..', 'db', 'ocorrencias.db')

  const db = await open({
    filename: filename,
    driver: sqlite.Database,
    mode: sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE,
  })

  return db
}
