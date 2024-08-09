import { Router } from "express";
import { addAccount, balance, deposit, transactions, withdraw } from "./account .controller.js";
import { auth } from "../../middleware/auth.js";

const accountRouter=Router()
accountRouter.post('/addaccount',auth,addAccount)
accountRouter.post('/deposit',auth,deposit)
accountRouter.post('/withdraw',auth,withdraw)
accountRouter.get('/balance',auth,balance)
accountRouter.get('/transaction',auth,transactions)

export default accountRouter