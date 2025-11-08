import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String },
    gender: { type: String, enum: ["men", "women", "unisex"], default: "unisex" },
    size: { type: [String] },
    color: { type: String },
    images: { type: [String] }, // URLs of product images
    stock: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
