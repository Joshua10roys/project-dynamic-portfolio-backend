import mongoose from "mongoose";

const experianceSchema = new mongoose.Schema(
    {
        enabled: {
            type: Boolean,
            default: true,
            require: true
        },
        position: {
            type: String,
            require: true
        },
        company: {
            type: String,
            require: true
        },
        duration: {
            type: String,
            require: true
        }
    },
    {
        versionKey: false
    }
);

export default mongoose.model("Experiance", experianceSchema);