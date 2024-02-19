import mongoose from 'mongoose';
import validator from 'validator';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: validator.isEmail

    },
    subject:{
        type: String,
        required: [true, 'subject is required']
    },
    message:{
        type: String,
        required: [true, 'message is required']
    }
})

export default mongoose.model('User', userSchema);