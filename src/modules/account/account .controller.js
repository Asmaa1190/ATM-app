import { Account } from "../../../database/models/account.model.js"
import { Transaction } from "../../../database/models/transaction.model.js"
import { User } from "../../../database/models/user.model.js"


export const addAccount=async(req,res,next)=>{
    const account= new Account({
        userId:req.user._id
    })
    await account.save()
    res.status(201).json({message:"Account created successfully",account})
}

export  const deposit=async(req,res)=>{
    const {amount}=req.body
    const account=await Account.findOne({userId:req.user._id})
    if(account){
        account.balance+=amount
        await account.save()
        let transaction= new Transaction({
            userId:req.user._id,
            accountId:account._id,
            action:'deposit',
            amount
        })
        await transaction.save()
        res.status(201).json({message:"Deposit successful",transaction})
    }
    else{
        res.status(404).json({message:"Account not found"})
    }
}
export  const withdraw=async(req,res)=>{
    const {amount}=req.body
    const account=await Account.findOne({userId:req.user._id})
    if(account.balance<amount){
        res.status(400).json({message:"Insufficient balance"})
    }
        account.balance-=amount
        await account.save()
        let transaction= new Transaction({
            userId:req.user._id,
            accountId:account._id,
            action:'withdraw',
            amount})
        await transaction.save()
        res.status(201).json({message:"withdraw successful",transaction})
    }

    export const balance = async (req, res) => {
       
            const account = await Account.findOne({ userId: req.user._id })
            if (account) { res.status(200).json({ balance: account.balance })}
           
    
            res.status(500).json({ message:"not found"})
       
    }

export const transactions = async (req, res) => {
  
        const transactions = await Transaction.find({ userId: req.user._id });
        res.status(200).json({ transactions });
    
};
    
