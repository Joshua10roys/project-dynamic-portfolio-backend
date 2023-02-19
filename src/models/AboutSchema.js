import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
    {
        enabled: {
            type: Boolean,
            default: true,
            require: true
        },
        aboutContent: {
            type: String,
            require: true,
            unique: true
        }
    },
    {
        versionKey: false
    }
);

export default mongoose.model("About", aboutSchema);