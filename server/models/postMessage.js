import mongoose from 'mongoose';

//for default info to be displayed
const postSchema = mongoose.Schema({
    title: String,
    selectedFile: String,
    name: String,
    createdAt: {
        type: Date ,
        default: new Date()
    }


})

const PostMessage = mongoose.model('PostMessage' , postSchema);

export default PostMessage;