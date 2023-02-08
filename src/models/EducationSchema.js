import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({

    enabled: {
        type: Boolean,
        require: true
    },
    course: {
        type: String,
        require: true
    },
    institute: {
        type: String,
        require: true
    },
    duration: {
        type: String,
        require: true
    }
});

export default mongoose.model("Education", educationSchema);