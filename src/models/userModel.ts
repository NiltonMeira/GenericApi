import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    homePhone:String,
    cep: String,
    state: String,
    city: String,
    adress: String,
    houseNumber: String
})