const app = require('./app')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})

const port = 5000;

app.listen(port, ()=>{
    console.log(`Server is listening at PORT: ${port}`)
})