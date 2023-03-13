import mongoose from "mongoose";
var connectDB = function (url) {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
};
export default connectDB;
