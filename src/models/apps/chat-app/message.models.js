import mongoose, { Schema } from "mongoose";

// TODO: Add image and pdf file sharing in the next version
const chatMessageSchema = new Schema(
  {
    sender: {
     userId: {
        type: String,
        required: true,
      },
    },   
    content: {
      type: String,
    },
    attachments: {
      type: [
        {
          url: String,
          localPath: String,
        },
      ],
      default: [],
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
  },
  { timestamps: true }
);

export const ChatMessage = mongoose.model("ChatMessage", chatMessageSchema);
