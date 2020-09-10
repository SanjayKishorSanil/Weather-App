console.log("client side js fileloaded")


 const weatherForm=document.querySelector('form')
 const search=document.querySelector('input')
 const messageOne=document.querySelector('#message-1')
 const messageTwo=document.querySelector('#message-2')
 const messageThree=document.querySelector('#message-3')
//  const messageFour=document.querySelector('#message-4')
//  const messageFive=document.querySelector('#message-5')
 //const messageSix=document.querySelector('#message-6')

 


 weatherForm.addEventListener('submit',(e)=>{
     e.preventDefault()
     const location=search.value
     console.log(location)
     console.log("Testing")
     messageOne.textContent="LOADING...."
     messageTwo.textContent=''
     messageThree.textContent=''
fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent='Cannot Find location'
         console.log(data.error)
        }
        messageOne.textContent=data.forecast
        messageTwo.textContent=data.location

       // messageSix.textContent=data.address
        
        // console.log(data.forecast)
        // console.log(data.location)
        // console.log(data.address)
    })
})
 })