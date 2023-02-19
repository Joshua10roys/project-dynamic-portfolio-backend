import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        enabled: {
            type: Boolean,
            default: true
        },
        name: {
            type: String,
            require: true
        },
        isLink: {
            type: Boolean,
            require: true
        },
        link: {
            type: String,
            require: true
        },
        icon: {
            type: String,
            require: true
        }
    },
    {
        versionKey: false
    }
);

export default mongoose.model("Contact", contactSchema);