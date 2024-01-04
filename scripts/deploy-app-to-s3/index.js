import fs from "fs";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { fileURLToPath } from "url";
import glob from "glob";
import mime from "mime";
import dotenv from "dotenv"; // Add this import

// Load environment variables from .env file
dotenv.config();

// Get the bucket name from the environment variable
const BUCKET_NAME = process.env.BUCKET_NAME || 'default-bucket-name';
export async function uploadToS3(filePath) {
  const s3Client = new S3Client({});

  // Get a list of all files and directories in the dist folder
  const filesAndDirs = glob.sync(`${filePath}/**/*`, { nodir: true });

  for (const fileOrDir of filesAndDirs) {
    const fileStream = fs.createReadStream(fileOrDir);

    // Calculate the S3 Key by removing the 'dist/' prefix
    const s3Key = fileOrDir.replace(filePath + '/', '');

    // Determine the Content-Type based on the file extension
    const contentType = mime.getType(fileOrDir) || 'application/octet-stream';

    try {
      await s3Client.send(
        new PutObjectCommand({
          Bucket: BUCKET_NAME,
          Key: s3Key,
          Body: fileStream,
          ContentType: contentType, // Set the Content-Type
          // Set this option to true to overwrite existing files
          // If the file doesn't exist, it will be created
          // If false, existing files won't be overwritten
          // Change this option to true to replace existing files
          // and make sure to keep backups of important data
          Overwrite: true
        })
      );
      console.log(`Uploaded: ${s3Key}`);
    } catch (error) {
      console.error(`Error uploading ${s3Key}: ${error.message}`);
    }
  }

  console.log(`All files in the specified folder are uploaded to S3.`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  // Get the dist folder path from the command line arguments
  const distPath = process.argv[2];
  uploadToS3(distPath);
}
