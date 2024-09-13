import Booking from '../models/booking_model.js'

// Método para guardar un turno en BD
export const createBooking = async (req, res) =>{
    try {
        const { service, treatment, date, info } = req.body;

        if (!service || ! treatment || !date) {
            return res.status(400).json({message: "Faltan campos requeridos para completar la solicitud."})
        };

        const newBooking = new Booking({
            service,
            treatment,
            date,
            info,
            user: req.user.id
        });

        const savedBooking = await newBooking.save();
        res.satus(201).json(savedBooking);

    } catch (error) {
        res.status(500).json({ message: 'Error al reservar turno.', error });
    }
}

export const deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findByIdAndDelete(id);

        if (!booking) {
            return res.status(404).json({ message: 'Reserva no encontrada.' });
        }

        res.status(204).send(); // Enviar una respuesta vacía
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la reserva.', error });
    }
};

export const getPersonalBookings = async(req, res) => {
    const booking = await Booking.find({
        user: req.user.id
    }).populate('user')
    res.json(booking)
}

export const getActiveBookings = async(req, res) => {}