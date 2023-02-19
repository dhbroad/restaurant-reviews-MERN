import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

app.use(cors())
app.use(express.json()) // means our server can accept json in the body of the request, so if someone sends a post or get request to our server, it can read JSON

app.use("/api/v1/restaurants", restaurants) // v1 is verson one. (apiroute, file)
app.use("*", (req,res) => res.status(404).json({error: "not found"})) // if someone goes to a route that doesn't exist, return not found. "*" means wildcard or anything else that's not in our route file

export default app // we will then be able to import our module in the file that accesses the database, which will be the file you run to get the server running. We just want to separate our main server code from our database code
