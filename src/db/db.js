import mongodb from "mongodb";

const DB_NAME = "videoTube";
const connectDB = async () => {
    try {
        const connectionInstant = await mongodb.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected on !! DB HOST : ${connectionInstant.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1);
    }
};

export default connectDB;
