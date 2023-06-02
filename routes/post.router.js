import express from 'express';

const postRouter = express.Router()


postRouter.get('/', (req, res)=>{
     console.log(req.query);
     res.send("gets all posters")
})
postRouter.post('/create', (req, res)=>{
     res.send(`${req.body.firstname}${req.body.Lastname}
               ${req.body.email}${req.body.birthdate}
               ${req.body.address} ${req.body.occupation}
              ${req.body.password}`
             );
     console.log('henter alle posters');
})

postRouter.put('/update', (req, res)=>{
     res.send('update all  posters');
     console.log('update all posters');
})


postRouter.delete('/delete', (req, res)=>{
     res.send('slet alle  poster');
     console.log('detlete alle posters');
})

export { postRouter }