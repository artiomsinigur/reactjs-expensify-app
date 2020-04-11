const express = require('express')
const app = express()
const path = require('path')

// Heroku set automatically port  
const port = process.env.PORT || 3000

const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

// Like historyApiFallback for ReactJs
// If the request is not in the public folder, return back the index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => console.log('Server run up on port 3000'))