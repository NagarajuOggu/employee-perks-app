import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const userModal = mongoose.model("User", UserSchema);

export default userModal;
