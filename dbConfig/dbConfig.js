import mongoose, { connect, connection } from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI);
        const connction = mongoose.connection;
        connction.on("connected", () => {
            console.log("MongoDB Connected");
        });
        connction.on("error", (err) => {
            console.log("MongoDB connection Error: " + err);
            process.exit();
        });
    } catch (error) {
        console.log("MongoDB Connection failed");
    }
}
