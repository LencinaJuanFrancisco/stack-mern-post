import dotenv from "dotenv"
dotenv.config()

export const URI_DB = process.env.URI_DB || "mongodb://localhost/testdb"
export const PORT = process.env.PORT || 3000