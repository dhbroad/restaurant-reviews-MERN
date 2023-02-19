import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.port || 8000

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50, // only 50 people can connect at a time
        wtimeoutMS: 2500, // after 2500ms, it will timeout
        useNewUrlParser: true } // recent update requires parser to be flagged in order to be used
    )
    .catch(err => {
        console.error(err.stack) // log the error
        process.exit(1) // exit after the error
    })
    .then(async client => { // after connected to database and checked for errors, we can start the web server with app.listen
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })