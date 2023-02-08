import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({

    enabled: {
        type: Boolean,
        require: true
    },
    aboutContent: {
        type: String,
        require: true,
        unique: true
    }
});

export default mongoose.model("About", aboutSchema);