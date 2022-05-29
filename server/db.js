import mongoose from "mongoose";
import {URI_DB} from "./config.js"


async function connectDB(){
    try {
      const db =  await mongoose.connect(URI_DB)
      console.log('🚀🚀 conectado a la DB 🚀🚀',db.connection.name)
        
    } catch (error) {
        console.log('🧯🧯 error en la conexion de la DB🧯🧯', error);
    }

}

export {connectDB}