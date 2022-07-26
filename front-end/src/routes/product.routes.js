const Router = require("express");
const {
  getProducts,
  getProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
  getNewsProduct,
  getProductByName,
} = require("../controllers/product.controller");
const { requireSignin, adminMiddleware } = require("../middlewares");

const router = Router();

// Get all products
router.get("/products", getProducts);

// Get top 4 new products
router.get("/products/new", getNewsProduct);

// Get product details (Consists of request and links Product)
router.get("/product/:id", getProduct);

// Get product by category
router.get("/products/:id", getProductByCategory);

// Get product by search
router.get("/productsearch/:Name", getProductByName);


// Create new product (middleware required signin, admin)
router.post("/product", requireSignin, adminMiddleware, createNewProduct);

// Update product (middleware required signin, admin)
router.put("/product/update/", requireSignin, updateProduct);

// Delete product (middleware required signin, admin)
router.delete("/product/:id", requireSignin, deleteProduct);

module.exports = router;
