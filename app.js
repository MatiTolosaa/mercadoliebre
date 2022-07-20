const express = require('express')
const { resolve } = require('path')
const path = require('path')
const app = express()
const publicPath = path.resolve(__dirname, './public')
const port = process.env.PORT || 3000
app.use (express.static(publicPath))

app.listen(port, () => console.log('Levantando un servidor con express'))

app.get('/home', function(req, res){ res.sendFile(resolve(__dirname, 'views/index.html'))
})

app.get('/register', function(req, res){ res.sendFile(resolve(__dirname, 'views/register.html'))
})

app.get('/login', function(req, res){ res.sendFile(resolve(__dirname, 'views/login.html'))
})