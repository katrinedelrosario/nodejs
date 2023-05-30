import express from 'express'

const app = express() 

app.listen(4242, () => {
    console.log('express server is running on http://localhost:4242');
})

app.get("/", (req, res) => {
    res.send('hii world');
})

app.get("/about", (req, res) => {
    res.send('about');
})

app.get("/contact", (req, res) => {
    res.send('contact');
})

app.get("/products", (req, res) => {
    res.send('products');
})

app.get("/", (req, res) => {
    res.send('hii world');
})

app.use((req, res, next) => {
    res.status(404).send('site not found :(')
})
