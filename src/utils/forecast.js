const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=ac66b2002bcf7cb664b7d631b3396609&query=' + latitude +',' + longitude +'&units=m'
    request({ url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect weather services',undefined)
        }
        else if(body.error){
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined,
                // description : response.body.current.weather_descriptions[0],
                // actualTemperature : response.body.current.temperature,
                // feelsLike : response.body.current.feelslike
                body.current.weather_descriptions[0]+' .it is currently '+ body.current.temperature+' However it feels like '+body.current.feelslike)
        }
    })

}

module.exports=forecast