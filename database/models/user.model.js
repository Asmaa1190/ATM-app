import mongoose,{Types} from 'mongoose'
import bcrypt from 'bcrypt'

const schema=new mongoose.Schema({
username:{
    type:String,
    unique:true,
    required:true
},
password:{
    type:String,
    required:true
},
 
},{
    timestamps:true,
    versionKey:false
})
schema.pre('save',async function(next){
if(!this.isModified('password')){
  return  next()
}
const salt=  bcrypt.genSaltSync(10)
this.password=bcrypt.hashSync(this.password,salt)
next()
})

export const User=mongoose.model('User',schema)