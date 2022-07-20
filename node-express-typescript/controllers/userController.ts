import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";
import UserInfo from "../model/UserInfo";

const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require('path');
const uuid = require('uuid').v4;
const picRouter = require('express').Router();

require("dotenv").config();

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.S3_BUCKET_REGION,
});

const upload = (bucketName:string) =>
  multer({
    storage: multerS3({
      //s3
      s3: s3,
      bucket: bucketName,
      acl: 'public-read-write',
      metadata: function (req: any, file: any, cb: any) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (req: any, file: any, cb: any) {
        const ext = path.extname(file.originalname);
        cb(null, `${uuid()}${ext}`);
      },
    }),
  });

picRouter.post('/', upload("profile-pic-upload-mern").single('profilePic'), async (req: Request, resp: Response) => {
    //onst id = 1;
    const uploaded = (req as any).file.location;
    //console.log("Uploaded file: ", req);
    //const user = await UserInfo.findOneAndUpdate({id:id}, {profilePic: uploaded});
    console.log((req as any).file)
    resp.status(200).send(uploaded);

})

// export const setProfilePic: RequestHandler = (
//   req: Request,
//   resp: Response,
//   next: NextFunction
// ) => {
//   const document = (req as any).files;
//   console.log(document);

//   const uploadSingle = upload("profile-pic-upload-mern").single("image-upload");
 
//   uploadSingle(req, resp, (err:any) => {
//     if (err) {
//         return resp.status(400).json({ success: false, message: err.message});
//     }
//     console.log((req as any).files);
//     resp.status(200).json({ data: (req as any).files });
//   });

  
// };

module.exports = picRouter;
