import connectDB from "./db/db.js";
const app = express();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port : ${process.env.PORT}`);
        });
        app.on("error", (err) => {
            console.log("ERR:", err);
            throw err;
        });
    })
    .catch((err) => {
        console.log("MongoDB Connection Failed !!!", err);
    });
