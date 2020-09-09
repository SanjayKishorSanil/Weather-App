
const request= require('request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoidHJpZ21hcnNoZWwiLCJhIjoiY2tldGh2Y3VhMm81eDJ5bXE4MmhpcXQ3byJ9.krmzi1c0ss_2gccra7gyRA&limit=1'
    request({ url,json:true},(error,{body})=>{
        if(error){
          callback('Unable to connect to MapBOx services')
        }else if(body.features.length==0){
            callback('Unidentifed Location !!')
        }
        else{
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
      
    })
}


module.exports=geocode