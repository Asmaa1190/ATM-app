import mongoose,{Types} from 'mongoose'


const schema=new mongoose.Schema({
userId:{
    type:Types.ObjectId,
    ref:'User',
    required:true
},
accountId:{
    type:Types.ObjectId,
    ref:'Account',
    required:true
},
action:{
    type:String,
    enum: ['deposit', 'withdraw'],
    required:true
},
amount:{
    type:Number,
    default:0
},
date:{
    type:Date,
    default:Date.now()
}
 
},{
    timestamps:true,
    versionKey:false
})


export const Transaction=mongoose.model('Transaction',schema)