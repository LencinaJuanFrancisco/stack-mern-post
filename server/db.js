import mongoose from "mongoose";
import {URI_DB} from "./config.js"


async function connectDB(){
    try {
      const db =  await mongoose.connect(URI_DB)
      console.log('ðð conectado a la DB ðð',db.connection.name)
        
    } catch (error) {
        console.log('ð§¯ð§¯ error en la conexion de la DBð§¯ð§¯', error);
    }

}

export {connectDB}