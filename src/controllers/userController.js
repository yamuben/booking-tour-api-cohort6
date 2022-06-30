import UserServices from "../services/userService";

class UserController {
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
