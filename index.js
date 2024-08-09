import express from 'express'
import { dbConnect } from './database/dbconnection.js'
import { bootstrap } from './src/modules/bootsrtap.js'
import 'dotenv/config'
const app = express()
const port = process.env.PORT||3000
app.use(express.json())
dbConnect
bootstrap(app)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))