import express from 'express'
import dotenv from 'dotenv'
import { postRouter } from './routes/post.router.js'
dotenv.config();


const app = express() 
app.use(express.urlencoded({extended:true}))

app.listen(4242, () => {
    console.log('express server is running on http://localhost:4242');
})

app.get("/", (req, res) => {
    res.send('hii world');
})

app.use("/post", postRouter)

app.use((req, res, next) => {
    res.status(404).send('site not found :(')
})
