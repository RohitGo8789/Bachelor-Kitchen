import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongo-db-uri').then(()=>{
       console.log('DB connected') ;
    })
}