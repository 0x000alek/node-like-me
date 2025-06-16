import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import postsRoutes from './routes/posts.routes.js'

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(cors())

app.use('/posts', postsRoutes)

app.listen(PORT, console.log(`Server on fire 🔥 http://localhost:${PORT}`))