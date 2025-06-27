
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hola wapos en type')
})


export default app