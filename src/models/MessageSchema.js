import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
});

export default mongoose.model("Message", messageSchema);