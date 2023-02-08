import mongoose from "mongoose";

const experianceSchema = new mongoose.Schema({

    enabled: {
        type: Boolean,
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
        type: Number,
        require: true
    }
});

export default mongoose.model("Experiance", experianceSchema);