const express=require('express')
const path=require('path')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const { error } = require('console')
// console.log(__dirname)
 //console.log(path.join(__dirname,'../public'))

const app=express()


//define paths for express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//setup handlebars engines and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


//setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather APP',
        name:'Sanjay'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'Node js Course',
        name:'SANJAY',
        content:'Page describes the About Section'

    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'HELP PAGE',
        name:'SANJAY',
        message:'THIS PAGE FOR USER MANUAL'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'Address must be provided'
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            //console.log(error)
            return res.send({
                error:'geocode error'
            })
        }
        forecast(latitude, longitude, (error, forecastdata)=>{
            if(error){
                return res.send({
                    error:'forecast error'
                })
            }
            res.send({
                forecast:forecastdata,
                location,
                address:req.query.address
            })
       
        })
    })


})
app.get('/product',(req,res)=>{
    if(!req.query.search){
      return  res.send({
            error:'you musdt provide  a search term'
        })

    }
   

    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.listen(3000,()=>{
    console.log('server is up on port 3000')
})