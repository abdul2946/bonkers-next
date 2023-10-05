import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Plesae Choose an user name"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please Enter your email id"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a passowrd"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswoedTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
