const Router = require("express");
// Gọi hàm từ controller
const {
  getUsers,
  getAccount,
  signup,
  updateAccount,
  deleteAccount,
  signin,
  user,
  updateAmount,
  getUsername,
  updateRole,
  getAllUsername
} = require("../controllers/account.controller");
const { requireSignin, adminMiddleware } = require("../middlewares");
// Gọi hàm check token
const verifyToken = require("../services/verify-token");

const router = Router();

// PHẦN ĐIỀU HƯỚNG

// Đăng ký tài khoản người dùng
router.post("/account/signup", signup);

//get username role 0
router.get("/username", requireSignin, adminMiddleware, getUsername);

//get all username 
router.get("/all/username",getAllUsername);

// Xem thông tin cá nhân thông qua token
router.get("/account/user", verifyToken, user);

router.post("/account/signin", signin);

// Quản lý list users (cần đăng nhập và quyền quản trị viên)
router.get("/accounts", requireSignin, adminMiddleware, getUsers);

// Quản lý tài khoản user chi tiết, cần đăng nhập
router.get("/account/:id", getAccount);

// Cập nhật tài khoản user
router.put("/account/update", updateAccount);

// update role
router.put("/account/role", updateRole);

// Xóa tài khoản người dùng (cần đăng nhập và quyền quản trị viên)
router.delete("/account/:id", requireSignin, adminMiddleware, deleteAccount);

router.put("/amount", requireSignin, updateAmount);

module.exports = router;
