import {Schema, model} from 'mongoose'

const UserScheme = new Schema({
    email: String,
    idade: Number
})

export default model('User', UserScheme)