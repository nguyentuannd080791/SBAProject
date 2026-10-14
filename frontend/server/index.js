import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createApp } from './app.js'

const port = Number(process.env.PORT) || 8080
const serverFolder = path.dirname(fileURLToPath(import.meta.url))
const databasePath = path.resolve(serverFolder, '../src/data/db.json')

const { app } = createApp(databasePath, { logger: true, reload: true })

app.listen(port, () => {
  console.log(`API đang chạy tại http://localhost:${port}`)
})
