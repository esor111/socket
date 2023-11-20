import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "ChatMessage",
    },
    participants: [
      {
        userId: String,
      },
    ],
    admin: {
      userId: {
        type: String,
        required: true
      }
    },
  },
  { timestamps: true }
);

export const Chat = mongoose.model("Chat", chatSchema);
