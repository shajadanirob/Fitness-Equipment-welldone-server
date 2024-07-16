import { Router } from "express";
import { ProductRoute } from "../modules/Product/product.route";

const router = Router();

const moduleRoutes = [
    {
      path: '/',
      route: ProductRoute,
    },
    
  ];
  moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;