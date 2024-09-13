import { Router } from 'express'
import { createNews, deleteNews, updateNews} from '../controllers/news.controller.js'
import {validateSchema} from '../middlewares/validator.middleware.js'
import {createNewsSchema} from '../Schemas/news.schema.js'

const router = Router()

router.post('/news', validateSchema(createNewsSchema),createNews);
router.put('/news',validateSchema(createNewsSchema),updateNews);
router.delete('/news',deleteNews);

export default router