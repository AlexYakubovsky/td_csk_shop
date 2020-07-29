const express       = require('express')
const app           = express()
const bodyParser    = require('body-parser')
const mongodb       = require('mongodb')
const auths         = require('../auths')
const mongoPresets  = { useUnifiedTopology: true }
const consola       = require('consola')
const router        = express.Router()

router.use(bodyParser.json())

async function routes() {
  const mongoClient = await mongodb.MongoClient.connect(
    `mongodb+srv://${auths.mongoUser}:${auths.mongoPass}@cluster0.5ytna.mongodb.net/${auths.dbname}?retryWrites=true&w=majority`,
    mongoPresets
  )
  return mongoClient.db(`${auths.dbname}`).collection('routes')
}

router.post("/getRoutes", async (req, res) => {
  const data = await routes()
  data.find({}).sort({categoryName: 1}).toArray((err, result) => {
    res.send(result).status(200)
  })
})

router.post('/another', (req, res) => {
  res.send('meowdy!')
})

module.exports = {
  path: '/api/',
  handler: router
}
