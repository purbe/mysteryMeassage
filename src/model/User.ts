import mongoose,{Schema,Document} from "mongoose";


export interface Message extends Document{
    content:string;
    createdAt: Date
}

const MessageSchema:Schema<Message>= new Schema({
    content : {
        type: String,
        required: true
    },
    createdAt:{
        type : Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document{
    username:string;
    email: string;
    password: string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerified:boolean;
    isAcceptingMessage:boolean;
    messages:Message[]
}

const UserSchema:Schema<User>= new Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        trim: true,
        unique:true

    },
    email:{
        type : String,
        required:[true,"Email is required"],
        unique:true,
        match:[/.[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/,"please put valid email"]

    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    verifyCode:{
        type:String,
        required:[true,"verify code is required"],
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"verify code expiry is required"],
    },
    isAcceptingMessage:{
        type:Boolean,
        default: false
    },
    isVerified:{
        type:Boolean,
        default: false
    },
    messages:[MessageSchema]

})

const UserModel = mongoose.models.User as mongoose.Model<User>||mongoose.model<User>("User",UserSchema)

export default UserModel