// import { v2 as cloudinary } from "cloudinary";

// import { config } from "dotenv";

// config();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export default cloudinary;

import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Validate and parse the CLOUDINARY_URL
if (!process.env.CLOUDINARY_URL) {
  throw new Error("⚠️ Error: CLOUDINARY_URL environment variable is missing!");
}

try {
  // Parse the URL
  const cloudinaryUrl = new URL(process.env.CLOUDINARY_URL);

  // Extract values from the URL
  const apiKey = cloudinaryUrl.username; // API Key
  const apiSecret = cloudinaryUrl.password; // API Secret
  const cloudName = cloudinaryUrl.hostname; // Cloud Name

  // Configure Cloudinary
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });

  console.log("✅ Cloudinary configured successfully");
} catch (error) {
  console.error("❌ Failed to configure Cloudinary:", error.message);
  process.exit(1);
}

export default cloudinary;
