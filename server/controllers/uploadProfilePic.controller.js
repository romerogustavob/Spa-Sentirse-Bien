import File from '../models/file_model.js';
import User from '../models/user_model.js'; // Asegúrate de importar el modelo de usuario

export const uploadProfilePic = async (req, res) => {
    try {
        if (!req.file) {
            console.log('No file uploaded');
            return res.status(400).json({ message: 'No se ha subido ningún archivo.' });
        }

        // Log de la información del archivo
        console.log('File info:', req.file);

        // Crear un nuevo registro de archivo en MongoDB
        const { filename, path, size } = req.file;
        const newFile = new File({ filename, path, size });
        const savedFile = await newFile.save();

        // Actualiza el documento del usuario
        const user = await User.findById(req.params.userId);
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        user.profilePic = savedFile._id;
        await user.save();

        console.log('File saved and user updated:', savedFile);
        res.status(201).json({ file: savedFile, message: 'Imagen de perfil subida y usuario actualizado.' });
    } catch (error) {
        console.error('Error uploading profile picture:', error);
        res.status(500).json({ message: 'Error al subir la imagen de perfil.', error });
    }
};
