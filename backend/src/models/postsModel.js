import pool from "../../db/config.js"

export const getAllPostsModel = async () => {
  const query = { text: 'SELECT * FROM posts' }

  const result = await pool.query(query)
  console.log('Posts fetched from the database: ', result.rows)

  return result.rows
}

export const createPostModel = async ({ titulo, img, descripcion, likes }) => {
  const initLikes = likes || 0
  const query = {
    text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
    values: [titulo, img, descripcion, initLikes]
  }

  const result = await pool.query(query)
  console.log('New post created: ', result.rows[0])

  return result.rows[0]
}

export const updatePostLikesModel = async (id) => {
  const query = {
    text: 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *',
    values: [id]
  }

  const result = await pool.query(query)
  console.log('Post likes updated: ', result.rows[0])

  return result.rows[0]
}

export const deletePostModel = async (id) => {
  const query = {
    text: 'DELETE FROM posts WHERE id = $1',
    values: [id]
  }

  const result = await pool.query(query)
  console.log('Post deleted: ', result.rowCount)

  return result.rowCount
}
