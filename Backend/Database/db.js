import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose
        .connect(process.env.mongoUrl)
        .then((c) => {
            console.log(`Mongodb connect to: ${c.connection.host}`);
        })
        .catch((err) => {
            console.log(err);
        });
};
