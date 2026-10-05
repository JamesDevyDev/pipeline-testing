import express from 'express'

const app = express()

app.use(express.static(import.meta.dirname + '/public'))

app.get('/ep1', (req, res) => {
    res.send("/ep1 is working! 1.0.0")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})