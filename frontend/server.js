import express from 'express'
import mongoose from 'mongoose'
import { fileURLToPath } from 'url'
import path from 'path'
import create_route from './mongo/CreateRoute.js'
import get_identity_route from './mongo/GetIdentityRoute.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

const staticDir = path.join(__dirname, 'src')

app.use(express.static(staticDir));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/submit', async (req, res) => {
  const identity_url = req.body.identity_url
  const shortened_url = await create_route(identity_url)
  res.send({ shortened_url })
})

mongoose.connect(process.env.DB_URL)

app.use('/:shortened_url', async (req, res) => {
  const shortened_url = req.params.shortened_url
  const identity_route = await get_identity_route(shortened_url)

  identity_route != -1 ? res.redirect(identity_route) : res.send("This URL does not exist")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
