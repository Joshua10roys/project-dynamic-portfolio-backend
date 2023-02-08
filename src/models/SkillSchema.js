import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({

    enabled: {
        type: Boolean,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    image: {
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
});

export default mongoose.model("Skill", skillSchema);