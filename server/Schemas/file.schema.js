const { z } = require('zod');

export const fileSchema = z.object({
    filename: z.string({
        required_error: 'El nombre del archivo es obligatorio.'
    }).min(1, {
        message: 'El nombre del archivo no puede estar vacío.'
    }),
    path: z.string({
        required_error: 'La ruta del archivo es obligatoria.'
    }),
    size: z.number({
        required_error: 'El tamaño del archivo es obligatorio.'
    }).max(1000000, {
        message: 'El tamaño del archivo no puede exceder 1MB.'
    })
});

