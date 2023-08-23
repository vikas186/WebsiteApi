const express = require('express')
const CategoryController = require('../controllers/category.controller')
const router = express.Router();


/**
 * @swagger
 * /api/category/create:
 *   post:
 *     tags:
 *       - Category
 *     summary: category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
  *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - name
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
router.post('/category/create', CategoryController.create);


/**
 * @swagger
 * /api/category/{id}:
 *   get:
 *     tags:
 *       -  Category
 *     summary: Find a category post by ID
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
router.get('/category/:id', CategoryController.findOne);


/**
 * @swagger
 * /api/Category/update/:
 *   put:
 *     tags:
 *       - Category
 *     summary: 'Update Category'
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "642d0bb29daf22457f18685f"
 *               name:
 *                 type: string
 *                 example: "category Name"
 *               title:
 *                 type: string
 *                 example: "enter title"
 *               description:
 *                 type: string
 *                 example: "enter descripption"
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

router.put('/Category/update', CategoryController.update);
/**
 * @swagger
 * /api/Category/delete:
 *   delete:
 *     tags:
 *       -  Category
 *     summary: 'Delete Category'
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "642d0bb29daf22457f18685f"
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
router.delete('/category/delete', CategoryController.destroy);

module.exports = router