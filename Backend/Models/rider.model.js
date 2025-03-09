import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { response } from 'express';

const riderSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'Firstname must be at least 3 characters long']
        },
        lastname: {
            type: String,
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        select: false
    },
    soketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
        },
        plate : {
            type: String,
            required: true,
            minlength: [8, "Enter the valid plate number"]
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ["Car", "Motorcycle", "Auto"]
        },
        capacity : {
            type: Number,
            required: true,
            min: [1, "Minimum capacity is 1"]
        }
    },
    location: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    }
})

riderSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
}

riderSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

riderSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}

const RiderModel = mongoose.model('Rider', riderSchema);
export default RiderModel;