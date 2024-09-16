import File from '../models/file_model.js'; 

export const uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No se ha subido ningún archivo.' });
        }

        // Extraer la información del archivo subido por Multer
        const { filename, path, size } = req.file;

        // Crear un nuevo registro de archivo en MongoDB
        const newFile = new File({
            filename,
            path,
            size
        });

        const savedFile = await newFile.save();
        res.status(201).json(savedFile);
    } catch (error) {
        res.status(500).json({ message: 'Error al subir el archivo.', error });
    }
};

export const deleteFile = async (req, res) => {
    try {
        const file = await File.findByIdAndDelete(req.params.id);

        if (!file) return res.status(404).json({ message: 'Archivo no encontrado.' });

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el archivo.', error });
    }
};
