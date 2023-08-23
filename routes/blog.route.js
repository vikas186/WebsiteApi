const express = require('express')
const Blogcontroller = require('../controllers/blog.Controller');
const uploadImage = require('../middleware/fileupload');
const router = express.Router();



/**
 * @swagger
 * /api/blog/create:
 *   post:
 *     tags:
 *       - Blog
 *     summary: Create a blog post
 *     consumes:
 *       - multipart/form-data   # Make sure to include this for form-data uploads
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary  # This indicates a file upload
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - image
 *               - title
 *               - description
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Bad Request
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */
router.post('/blog/create', uploadImage.single('image'),   Blogcontroller.create);
/**
 * @swagger
 * /api/blog/{id}:
 *   get:
 *     tags:
 *       - Blog
 *     summary: Find a blog post by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the blog post
 *         required: true
 *         schema:
 *           type: string
 *         example: hs-no-35-mohali-address
 *     responses:
 *       '200':
 *         description: Successful response
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Blog post not found
 *       '500':
 *         description: Internal Server Error
 */
router.get('/blog/:id', Blogcontroller.findOne);

/**
 * @swagger
 * /api/blog/updateBlog:
 *   put:
 *     tags:
 *       - Blog
 *     summary: 'Update Blog'
 *     consumes:
 *       - multipart/form-data   # Make sure to include this for form-data uploads
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary  # This indicates a file upload
 *               id:
 *                 type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Authorization Failure
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */
router.put('/blog/updateBlog', uploadImage.single('image'), Blogcontroller.updateBlog);

/**
 * @swagger
 * /api/blog/delete:
 *   delete:
 *     tags:
 *       - Blog
 *     summary: delete a blog post 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
  *               id:
 *                 type: string
 *                 example: "642d0bb29daf22457f18685f"
 *              
 *             required:
 *               - image
 *               - title
 *               - content
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Bad Request
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */
router.delete('/blog/delete', Blogcontroller.destroy);


module.exports = router