const express= require('express');
const nodemon = require('nodemon')
const cors= require('cors');
const multer = require('multer')
const app =express()
app.use(cors());
app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
const collection= require('./mongoose')




app.get("/",(req,res)=>{
    res.send('<h2>hi node✌️</h2>')
    })

    const storage= multer.diskStorage({
        destination:function(req,res,cb){
            return cb(null,"./public/images")
        },
        filename:function(req,file,cb){
            return cb(null,`${Date.now()}_${file.originalname}`)
        }
    })

    const upload = multer({storage})

    app.post('/file',upload.single('file'),(req,res)=>{
        collection.create({image:req.file.filename})
        .then((result)=>res.json(result))
        .catch(err=>console.log(err)
        )

// console.log(req.body);
// console.log(req.file);


    })

    app.get('/getfile',(req,res)=>{
        collection.find()
        .then((user)=>res.json(user))
        .catch(err=>res.json(err))
    })
    

    app.listen(8080,function(){
        console.log('connected😊');
        })