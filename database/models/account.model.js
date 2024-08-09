import mongoose,{Types} from 'mongoose'


const schema=new mongoose.Schema({
userId:{
    type:Types.ObjectId,
    ref:'User',
    required:true
},
balance:{
    type:Number,
    default:0
},
 
},{
    timestamps:true,
    versionKey:false
})


export const Account=mongoose.model('Account',schema)