import { connectDB } from "./Database/db.js";
import { app } from "./app.js";

connectDB();
app.listen(process.env.Port, () => {
    console.log(`Server is running on port ${process.env.Port} in ${process.env.NODE_ENV} mode`);
});
