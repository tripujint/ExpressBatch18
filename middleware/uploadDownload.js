import multer from "multer";

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./images");
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        },
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg" ||
            file.mimetype === "application/pdf") {
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error("Only .png, .jpg, .jpeg and .pdf format allowed"))
        }
    },
    limits: { fileSize: 3 * 1024 * 1024 }
}).fields([{name : 'file'},{name : 'foto'}])

export default {
    upload
}