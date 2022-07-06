import UserServices from "../services/userService";
import handlePassword from "../utils/handlePassword";
import TokenAuth from "../utils/token";
class UserController {
  //login controllers
  static async loginUserController(req, res) {
    const user = await UserServices.loginUser(req);

    if (!user) {
      return res.status(400).json({ message: "User is not exist" });
    }

    if (handlePassword.checkPassword(user.password, req.body.password)) {
      const token=TokenAuth.generateToken({ 
        phone: user.phone, 
        email: user.email, 
        picture: user.picture, 
        names: user.names,
      })
      return res.status(200).json({ message: "logged in successfully",token });
    } else {
      return res
        .status(400)
        .json({ message: "failed to loggin , Password is wrong!" });
    }
  }
  //register User
  static async registerUser(req, res) {
    const newUser = await UserServices.registerUser(req);

    if (!newUser) {
      return res.status(404).json({
        message: "failed to register",
      });
    }

    return res.status(201).json({
      message: "success",
      data: newUser,
    });
  }

  static testController(req, res) {
    const test = UserServices.testServiceFunction(req);

    return res.status(200).json({
      message: "Ok! Successfully",
      data: test,
    });
  }
}

export default UserController;
