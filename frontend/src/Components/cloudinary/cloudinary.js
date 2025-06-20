import axios from "axios";

export const uploadToCloudinary = async (file) => {
  const cloudName = "dxmysfiux"; 
  const unsignedUploadPreset = "Digital Striker"; 

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", unsignedUploadPreset);

  try {
    const res = await axios.post(url, formData);
    return res.data.secure_url; 
  } catch (err) {
    console.error("Cloudinary Upload Error:", err);
    return null;
  }
};
