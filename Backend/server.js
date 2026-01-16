import express from "express";

import userRoutes from "./routes/userRoutes.js";
import dataRoutes from "./routes/dataRoutes.js";

const app = express();

app.use("/api/users", userRoutes);
app.use("/api/data", dataRoutes)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
