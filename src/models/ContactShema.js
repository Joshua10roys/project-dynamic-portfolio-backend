import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({

    github: String,
    github_enabled: Boolean,

    linkedin: String,
    linkedin_enabled: Boolean,

    twitter: String,
    twitter_enabled: Boolean,

    instagram: String,
    instagram_enabled: Boolean,

    email: String,
    email_enabled: Boolean,

    mobileNo: String,
    mobileNo_enabled: Boolean,

    location: String,
    location_enabled: Boolean,

});

export default mongoose.model("Contact", contactSchema);