import mongoose from 'mongoose';
import { IUser } from '../interfaces/IUser';
import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const userSchema: mongoose.Schema = new Schema <IUser> ({
    ci: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    userAdmin: {
        type: Number,
        default: 3,
    }
})

const saltRounds = 8;

// userSchema.pre('save', function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const document:any = this;
//         bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
//             if (err) {
//                 next(err);
//             } else {
//                 document.password = hashedPassword;
//                 next();
//             }
//         });
//     } else {
//         next();
//     }
// });

// userSchema.methods.isCorrectPassword = function (candidatePassword:any, callback:any) {
//     bcrypt.compare(candidatePassword, this.password, function (err, same) {
//         if (err) {
//             callback(err);
//         } else {
//             callback(err, same);
//         }
//     });
// }

const User: mongoose.Model <IUser> = model <IUser> ('User', userSchema);

export{
    User
}