const connectDatabase = require('../database/db')
const User=require('../models/user')
module.exports.myProfile = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectDatabase();
        const {email}=event.pathParameters;
        console.log(event.pathParameters)
        const user=await User.findOne({email});
        console.log(user)
        return {
            statusCode:200,
            body:JSON.stringify(user)
        }
    } catch (error) {
        return {
            statusCode:400,
            body:"error due to some thing happen"
        }
    }
}
