import { v2 as _cloudinary } from "cloudinary";

function cloudinary() {
  const config = useRuntimeConfig();

  _cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.cloud_api_key,
    api_secret: config.cloud_api_secret,
  });

  return _cloudinary;
}

function uploadToCloud(file: any) {
  return new Promise((resolve, reject) => {
    console.log(file);
    cloudinary().uploader.upload(file, (error: any, data: any) => {
      if (error) reject(error);

      resolve(data);
    });
  });
}

export { uploadToCloud };
