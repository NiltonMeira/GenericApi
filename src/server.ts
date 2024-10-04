import mongoose from "mongoose"
import app from "./app"

const startServer = async () => {
    await mongoose.connect("mongodb://localhost:27017/GenericDB")
    app.listen(1960, () => console.log("Listening to port 1960")
    )
}

startServer()