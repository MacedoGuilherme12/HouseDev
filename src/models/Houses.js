import { Schema, model } from 'mongoose';

const HouseSchema = new Schema({
  image: String,
  house: String,
  valor: Number,
  status: Boolean,
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true
  }
});

HouseSchema.virtual('image_url').get(function(){
  return `http://localhost:3333/files/${this.image}`;
})

export default model('House', HouseSchema);