import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema (
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        isAdmin: {
            type: String,
            default: false
        }
    },
    {timestamps: true} 
)

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const User = mongoose.model('User', userSchema);
export default User;