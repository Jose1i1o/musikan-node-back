const multer = require('multer');
const path = require('path');

// Multer config

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    // let ext = path.extname(file.originalname);
    // if (ext !== '.jpg' && ext !== '.jepg' && ext !== '.png') {
    //   cb(new Error('File type is not supported'), false);
    //   return;
    // }
    if (!file.mimetype.match(/png||jpeg||jpg||gif$i/)) {
      cb(new Error('File is not suported'), false);
      return;
    }

    cb(null, true);
  },
});
