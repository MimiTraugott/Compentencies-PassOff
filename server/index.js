require('dotenv').config()
const express=require('express')
const ctrl=require('./controller')
const massive=require('massive')
const app=express()
const{SERVER_PORT, CONNECTION_STRING}=process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log("database connected")
})
//ENDPOINTS
app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addInventory)
app.delete('/api/product/:id', ctrl.deleteInventory)
app.put('/api/product/:id', ctrl.updateInventory)


app.listen(SERVER_PORT, ()=>console.log(`running on ${SERVER_PORT}`))




