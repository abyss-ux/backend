import mongoose,{Schema} from "mongoose";//* so that you dont have to do mongoose.schema() everytime
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique: true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        lowercase:true,
        trim:true,
    },
    
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true,
    },
    avatar:{
        type:String,        //?cloudinary URL
        required:true,
    },
    coverimage:{
        type:String,        //?cloudinary URL
    },
    watchHistory:[
         {
            type:Schema.Types.ObjectId,
            ref: "Video",
         } 
    ],
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    refreshToken:{
        type:String
    },
    
},{timestamps:true})


userSchema.pre("save", async function(next){             //*middleware so next and after that next is called once to pass the flag
    if(!this.isModified("password")) return next();      //!to check if hashing req or not if pass not modified no hashing
    this.password = bcrypt.hash(this.password,10)        //? the number describes how many rounds
    next()                                               // to pass the flag
})

userSchema.methods.isPasswordCorrect = async function (password) {
     return await bcrypt.compare(password,this.password); 
}

userSchema.methods.generateAccesToken = function() {
    return jwt.sign(
        {
            _id: this._id,          // from database
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
            process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY
            }
    )
}
userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            _id: this._id,          // from database
             //* refresh token mein data kam hota hai 
        },
            process.env.REFRESH_TOKEN_SECRET,{
                expiresIn: process.env.REFRESH_TOKEN_EXPIRY
            }
    )
}


export const User = mongoose.model("User",userSchema)