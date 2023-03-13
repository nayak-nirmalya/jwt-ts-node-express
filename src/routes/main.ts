import { Router } from "express";

import { getAllProductsStatic, getAllProducts } from "../controllers/main.js";

const router = Router();

router
  .route("/")
  .get<{}, { products: Product[]; nbHits: number }, {}, Partial<Product>>(
    getAllProducts
  );
router
  .route("/static")
  .get<{}, { products: Product[] }, {}>(getAllProductsStatic);

export { router as productsRouter };
