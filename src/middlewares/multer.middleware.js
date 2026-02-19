import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)   // ignored the unique suffix as not reqd right now 
  }
})

export const upload = multer({ storage,
    
})