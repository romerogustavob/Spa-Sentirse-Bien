import { Router } from 'express'
import { createComment, deleteComment} from '../controllers/comment.controller.js'
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createCommentSchema } from "../Schemas/comment.schema.js";

const router = Router()

router.post('/comment',validateSchema(createCommentSchema),createComment);
router.delete('/comment/:id',deleteComment)

export default router