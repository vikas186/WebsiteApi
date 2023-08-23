const express = require('express')
const TeamController = require('../controllers/team.controller');
const uploadImage = require('../middleware/fileupload');
const router = express.Router();




/**
 * @swagger
 * /api/team/create:
 *   post:
 *     tags:
 *       - Team
 *     summary: Create a team post
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
 *               name:
 *                 type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - image
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
router.post('/team/create', uploadImage.single('image'), TeamController.create);

// /**
//  * @swagger
//  * /api/team/findall:
//  *   get:
//  *     tags:
//  *       - Team
//  *     summary: find all team post
//  *     consumes:
//  *       - multipart/form-data   # Make sure to include this for form-data uploads
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         multipart/form-data:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               image:
//  *                 type: string
//  *                 format: binary  # This indicates a file upload
//  *               title:
//  *                 type: string
//  *               description:
//  *                 type: string
//  *             required:
//  *               - image
//  *               - title
//  *               - description
//  *     responses:
//  *       '201':
//  *         description: User created successfully
//  *       '400':
//  *         description: Bad Request
//  *       '422':
//  *         description: Validation Error
//  *       '500':
//  *         description: Internal Server Error
//  */
// router.get('/team/findall', TeamController.findAll);
 /**
 * @swagger
 * /api/team/{id}:
 *   get:
 *     tags:
 *       - Team
 *     summary: Find a team post by ID
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
 router.get('/team/:id', TeamController.findOne);
/**
 * @swagger
 * /api/team/updateTeam:
 *   put:
 *     tags:
 *       - Team
 *     summary: 'Update Team'
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
 *               name:
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
router.put('/team/updateTeam', uploadImage.single('image'), TeamController.updateTeam);
/**
 * @swagger
 * /api/team/delete:
 *   delete:
 *     tags:
 *       - Team
 *     summary: delete a team post 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: 642d0bb29daf22457f18685f
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
router.delete('/team/delete', TeamController.destroy);

module.exports = router