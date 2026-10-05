import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('WELCOME!')
})

app.get('/ep1', (req, res) => {
    res.send("/ep1 is working!")
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})