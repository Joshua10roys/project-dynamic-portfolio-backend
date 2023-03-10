import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        createdAt: {
            type: Date,
            default: () => Date.now(),
            immutable: true
        }
    },
    {
        versionKey: false
    }
);

export default mongoose.model("User", userSchema);