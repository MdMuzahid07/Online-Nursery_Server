/* eslint-disable no-console */
import { v2 as cloudinary } from 'cloudinary';
import config from '../config';
import multer from 'multer';
import fs from "fs";

// Configuration
cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.cloud_api_key,
    api_secret: config.cloud_api_secret
    // Click 'View API Keys' above to copy your API secret
});



export const saveImageToCloudinary = async (imgName: string, path: string) => {


    // Upload an image
    const uploadImage = await cloudinary.uploader
        .upload(
            path,
            {
                public_id: imgName,
            }
        )
        .catch((error) => {
            console.log(error);
        });


    // removing the image after from the upload folder after save to cloudinary
    fs.unlink(path, (error) => {
        if (error) {
            console.log(error, "fs unlink");
        } else {
            console.log("file removed successfully", "fs unlink");
        }
    });


    return uploadImage;
};


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.cwd() + "/uploads");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

export const upload = multer({ storage: storage });
