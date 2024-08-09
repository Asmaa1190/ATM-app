import accountRouter from "./account/account.routes.js"
import userRouter from "./user/user.routes.js"

export const bootstrap=(app)=>{

    app.use('/users',userRouter)
    app.use('/accounts',accountRouter)
    
    }