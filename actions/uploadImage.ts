"use server";
import { v2 as cloudinary } from "cloudinary";

export const uploadImage = async (fileStr: string) => {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    // Upload an image
    const res = await cloudinary.uploader
      .upload(fileStr, {
        public_id: "blog",
      })
      .catch((error) => {
        console.log(error);
      });

    return { imageUrl: res?.url };
  } catch (error) {
    return { error: "Image upload failed" };
  }
};
