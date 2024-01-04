import fs from "fs";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { fileURLToPath } from "url";

const BUCKET_NAME = '' // [SELECT] SPECIFY BUCKET
const KEY = '' // [SELECT] SPECIFY KEY


export async function main(filePath) {
  // Ensure a file path was provided
  if (!filePath) {
    console.error("Please provide a file path");
    process.exit(1);
  }

  const fileStream = fs.createReadStream(filePath);
  const s3Client = new S3Client({});
  await s3Client.send(
    new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: KEY,
      Body: fileStream
    })
  );

  console.log(`File uploaded successfully: ${filePath}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  // Get the file path from the command line arguments
  const filePath = process.argv[2];
  main(filePath);
}
