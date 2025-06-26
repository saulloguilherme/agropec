import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
dotenv.config();

export const s3 = new S3Client({
  region: 'us-east-1',
  endpoint: process.env.MINIO_ENDPOINT,
  credentials: {
    accessKeyId: process.env.MINIO_ACCESS_KEY!,
    secretAccessKey: process.env.MINIO_SECRET_KEY!,
  },
  forcePathStyle: true,
});

export async function uploadImagem(file: Express.Multer.File) {
  const command = new PutObjectCommand({
    Bucket: 'uploads',
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
  });

  await s3.send(command);
  return `${process.env.MINIO_ENDPOINT}/uploads/${file.originalname}`;
}