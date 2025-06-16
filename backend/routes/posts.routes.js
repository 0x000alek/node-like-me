import { Router } from 'express'
import { getAllPostsController, createPostController, updatePostLikesController, deletePostController } from '../src/controllers/postsController.js'

const router = Router()

router.get('/', getAllPostsController)
router.post('/', createPostController)
router.put('/like/:id', updatePostLikesController)
router.delete('/:id', deletePostController)

export default router