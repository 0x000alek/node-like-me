import { getAllPostsModel, createPostModel, updatePostLikesModel, deletePostModel } from "../models/postsModel.js"

export const getAllPostsController = async (req, res) => {
  try {
    const posts = await getAllPostsModel()

    console.log('[controller] Posts fetched from the database: ', posts)
    res.json(posts)
  } catch (error) {
    console.error(error)
    res.json({ error })
  }
}

export const createPostController = async (req, res) => {
  try {
    const { titulo, img, descripcion, likes } = req.body
    const post = await createPostModel({ titulo, img, descripcion, likes })

    console.log('[controller] New post created: ', post)
    res.json(post)
  } catch (error) {
    console.error(error)
    res.json({ error })
  }
}

export const updatePostLikesController = async (req, res) => {
  try {
    const { id } = req.params
    const post = await updatePostLikesModel(id)
    if (!post) {
      return console.error('[controller] Post not found with id: ', id)
    }

    console.log('[controller] Post likes updated: ', post)
    res.json({ post })
  } catch (error) {
    console.error(error)
    res.json({ error })
  }
}

export const deletePostController = async (req, res) => {
  try {
    const { id } = req.params
    const post = await deletePostModel(id)
    if (!post) {
      return console.error('[controller] Post not found with id: ', id)
    }

    console.log('[controller] Post deleted: ', post)
    res.json({ post: 'Post deleted' })
  } catch (error) {
    console.error(error)
    res.json({ error })
  }
}
