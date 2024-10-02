import {Schema, SchemaType, model} from 'mongoose'

const ReserveScheme = new Schema({
    date: String,
    house : {
        type : Schema.Types.ObjectId,
        ref : "House"
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
})

export default model('Reserva', ReserveScheme)