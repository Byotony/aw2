"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
});
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
const User = (0, mongoose_1.model)('User', userSchema);
exports.User = User;
