const express = require('express')
const sendMail = require('./mail')
const cors = require("cors")
const path = require('path')



const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())



const PORT = process.env.PORT || 8080;

app.post("/api/form", (req, res) => {
    const { name, email, country, subject, phone, message, requests } = req.body

    sendMail( name, email, country, subject, phone, message, requests, (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Internal error' })
        } else {
            res.json({ message: 'Message sent!!!!!' })
        }
    })
})


app.get('/api', (req, res) => {
    return res.send('test');

})

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static('../client/build'))

//     app.get('/*', function (req, res) {
//         res.sendFile(path.join(__dirname, '/../client/build', 'index.html'));
//     });
// }

app.get('/', (req, res) => { res.send('Hello from Express!')})

// // where the script is running
// app.use(express.static('../client/build'));   
// app.use(express.static(path.join(__dirname, '/../client/build')));

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '/../client/build', 'index.html'));
// });





app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})