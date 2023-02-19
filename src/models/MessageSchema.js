import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        message: {
            type: String,
            require: true
        },
        created: {
            type: Date,
            default: () => Date.now(),
            immutable: true,
        }
    },
    {
        versionKey: false
    }
);

export default mongoose.model("Message", messageSchema);