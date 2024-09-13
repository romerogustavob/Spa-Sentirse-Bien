import New from '../models/news_model.js'; // Asegúrate de que la ruta sea correcta

// Método para crear una noticia
export const createNews = async (req, res) => {
    try {
        const { title, description, imageURL, publishedAt } = req.body;
        const author = req.user ? req.user.username: 'Desconocido'

        // Validación de campos requeridos
        if (!title || !description) {
            return res.status(400).json({ message: 'Title y description son requeridos.' });
        }

        const newNews = new New({
            title,
            description,
            imageURL,
            publishedAt,
            author
        });

        const savedNews = await newNews.save();
        res.status(201).json(savedNews);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la noticia.', error });
    }
};

// Método para eliminar una noticia
export const deleteNews = async (req, res) => {
    try {
        const { id } = req.params;
        const news = await New.findByIdAndDelete(id);

        if (!news) {
            return res.status(404).json({ message: 'Noticia no encontrada.' });
        }

        res.status(204).send(); // Enviar una respuesta vacía
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la noticia.', error });
    }
};

// Método para actualizar una noticia
export const updateNews = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, imageURL, publishedAt } = req.body;
        const author = req.user ? req.user.username : 'Unknown';

        // Validación de campos requeridos
        if (!title || !description) {
            return res.status(400).json({ message: 'Title y description son requeridos.' });
        }

        const updatedNews = await New.findByIdAndUpdate(
            id,
            { title, description, imageURL, publishedAt, author },
            { new: true, runValidators: true } // new: true devuelve el documento actualizado, runValidators asegura que los datos cumplen con el esquema
        );

        if (!updatedNews) {
            return res.status(404).json({ message: 'Noticia no encontrada.' });
        }

        res.status(200).json(updatedNews);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la noticia.', error });
    }
};
