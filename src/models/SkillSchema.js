import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
    {
        enabled: {
            type: Boolean,
            default: true,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        value: {
            type: Number,
            require: true
        },
        color: {
            type: String,
            require: true
        }
    },
    {
        versionKey: false
    }
);

export default mongoose.model("Skill", skillSchema);