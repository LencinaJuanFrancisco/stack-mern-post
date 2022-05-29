
import {connectDB} from './db.js'
import {PORT} from "./config.js"
import app from "./app.js"
connectDB()



app.listen(3000,(err)=>{
    err ? console.log('🔥🔥 error en la conexion con el servido🔥🔥 ',err)
        : console.log(`🏁🏁 server corriendo en http://localhost:${PORT} 🏁🏁`)
})