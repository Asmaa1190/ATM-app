import { connect } from 'mongoose'

export const dbConnect=connect('mongodb://127.0.0.1:27017/ATM_app').then(()=>{
    console.log('db connected')})
.catch(() => { console.log('database error') })