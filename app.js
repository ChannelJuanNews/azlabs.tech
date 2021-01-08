let express = require('express')
let PORT = process.env.PORT || 3000

app.get('/contact', (req, res) => {
    res.sendFile( __dirname + '/contact.html')
})

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/index.html')
})

app.listen( PORT, (err) => {
    if(err) console.log(err)
    console.log("listening on port", PORT)
})