import mongoose,{model,Schema} from "mongoose"


mongoose.connect('mongodb+srv://admin:l1NLRS7F0buyTeQb@cluster0.l4syvyx.mongodb.net/s');

const UserSchema=new Schema({
    username:{type:String,unique:true},
    password:String
})
const ContentSchema= new Schema({
    user:{type:Schema.Types.ObjectId,ref:'user'},
    type:String,
    link:String,
    tag:{type:Schema.Types.ObjectId,ref:'tag'}
})
const TagSchema= new Schema({
    name:String,
})

export const User= model('user',UserSchema);
export const Content=model('content',ContentSchema);
export const Tag=model('tag',TagSchema);
