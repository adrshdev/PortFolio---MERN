const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = Date.now() + '-' + crypto.randomBytes(6).toString('hex') + ext;
    cb(null, filename)
  }
});

const upload = multer({
  storage,
});

module.exports = upload;