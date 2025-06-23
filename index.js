import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hola y adios')
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('Servidor bien pro funcionando en el puerto', port)
})