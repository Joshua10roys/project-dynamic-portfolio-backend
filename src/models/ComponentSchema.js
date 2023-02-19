import mongoose from "mongoose";

const componentSchema = new mongoose.Schema(
    {
        about: {
            type: Boolean,
            default: true,
        },
        education: {
            type: Boolean,
            default: true,
        },
        skill: {
            type: Boolean,
            default: true,
        },
        experiance: {
            type: Boolean,
            default: true,
        },
        contact: {
            type: Boolean,
            default: true,
        },
        message: {
            type: Boolean,
            default: true,
        }
    },
    {
        versionKey: false
    }
);

export default mongoose.model("Component", componentSchema);