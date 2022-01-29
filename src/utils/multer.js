const multer = require('multer');

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.match(/png||jpeg||jpg||gif$i/)) {
      cb(new Error('File is not suported'), false);
      return;
    }

    cb(null, true);
  },
});
