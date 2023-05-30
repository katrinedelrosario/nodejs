import express from 'express'

const app = express() 

app.listen(4242, () => {
    console.log('express server is running on http://localhost:4242');
})

app.get("/", (req, res) => {
    res.send('hii world');
})

