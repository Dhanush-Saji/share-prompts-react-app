import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () =>{
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log('MongoDB is already connected')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODBURL,{
            dbName:'share_prompt',
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isConnected = true
        console.log('connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}