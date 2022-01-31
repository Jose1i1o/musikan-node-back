const multer = require('multer');

const multerImage = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.match(/png||jpeg||jpg||gif$i/)) {
      cb(new Error('File is not suported'), false);
      return;
    }

    cb(null, true);
  },
});

const multerAudio = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    if (
      !file.mimetype.match(
        /wav||flac||alac||dsd||mp3||aiff|mqa||au||mpeg-4||shorten||tta||atrac||wma||ogg$i/
      )
    ) {
      cb(new Error('File is not suported'), false);
      return;
    }

    cb(null, true);
  },
});

module.exports = { multerImage, multerAudio };
