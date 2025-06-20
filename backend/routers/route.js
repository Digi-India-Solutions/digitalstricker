const express = require('express');
const { createProduct,getallproduct,deleteProduct,singleProduct } = require('../controllers/productController');
const { getContacts, createContact, deleteMail } = require('../controllers/ContactController');
const router = express.Router();
// productController.createProduct
router.post('/createProducts',createProduct )
router.get('/allProduct', getallproduct)
router.delete( '/deleteProduct/:id', deleteProduct);
router.get( '/singleProduct/:id', singleProduct);
router.get( '/getcontact', getContacts);
router.post( '/createcontact', createContact);
router.delete('/delete-mail/:id', deleteMail)


module.exports = router;