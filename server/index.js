import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import app from "./app.js";
connectDB();

app.listen(PORT, (err) => {
  err
    ? console.log("π₯π₯ error en la conexion con el servidoπ₯π₯ ", err)
    : console.log(`ππ server corriendo en http://localhost:${PORT} ππ`);
});
