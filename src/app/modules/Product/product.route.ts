import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createProductValidationSchema } from './productValidation';
import { ProductController } from './product.controller';
const router = express.Router();
router.post(
    '/products',
    validateRequest(createProductValidationSchema),
    ProductController.createProduct,
  );
router.get(
    '/products/:id',
    ProductController.getSingleProduct,
  );
router.get(
    '/products',
    ProductController.getAllProduct,
  );
router.get(
    '/products/:category',
    ProductController.getCategoryProduct,
  );
router.put(
    '/products/:id',
    ProductController.updateProduct,
  );
router.delete(
    '/products/:id',
    ProductController.deleteProducts,
  );

export const ProductRoute = router;