"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const upload = (bucketName) => multer({
    storage: multerS3({
        //s3
        s3: s3,
        bucket: bucketName,
        acl: 'public-read-write',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const ext = path.extname(file.originalname);
            cb(null, `${uuid()}${ext}`);
        },
    }),
});
picRouter.post('/', upload("profile-pic-upload-mern").single('profilePic'), (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    //onst id = 1;
    const uploaded = req.file.location;
    //console.log("Uploaded file: ", req);
    //const user = await UserInfo.findOneAndUpdate({id:id}, {profilePic: uploaded});
    console.log(req.file);
    resp.status(200).send(uploaded);
}));
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
