const connectDatabase = require('../database/db')
const User=require('../models/user')
module.exports.createUser = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectDatabase();
        const dataOfUser=JSON.parse(event.body)
        console.log(dataOfUser)
        const user = new User(dataOfUser);
        await user.save();
        return {
            statusCode:201,
            body:JSON.stringify(dataOfUser)
        }
    } catch (error) {
        // console.log(error,"3")
        return {
            statusCode:400,
            body:"error due to some thing happen"
        }
    }
}
