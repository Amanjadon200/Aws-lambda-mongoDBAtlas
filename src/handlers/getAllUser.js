const connectDatabase = require('../database/db')
const User=require('../models/user')
module.exports.getUser = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        let arr=[];
        await connectDatabase();
        await User.find({}).then((user)=>{
            user.map((userData)=>{
                arr.push(userData)
            })
        })
        return {
            statusCode:200,
            body:JSON.stringify(arr)
        }
    } catch (error) {
        return {
            statusCode:400,
            body:"error due to some thing happen"
        }
    }
}
