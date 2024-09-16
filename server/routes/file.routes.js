const express = require('express');
const upload = require('../config/multer');
const router = express.Router();

// Ruta para subir un archivo
router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send(`File uploaded: ${req.file.filename}`);
});

module.exports = router;
