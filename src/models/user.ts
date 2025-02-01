import mongoose from "mongoose";

export interface Users extends mongoose.Document {
  username: string;
  email: string;
  whatsapp: number;
  password: string;
  role: "user" | "admin";
  createdAt: string;
}

const userSchema = new mongoose.Schema<Users>({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Please enter a valid email address!"],
  },
  whatsapp: {
    type: Number,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  createdAt: {
    type: String,
    default: new Date().toLocaleString().split(",")[0],
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
