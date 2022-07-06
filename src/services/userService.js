import UserModel from "../models/user";
import handlePassword from "../utils/handlePassword";
class UserServiceS {
  //login
  static async loginUser(req) {
    const user = await UserModel.findOne({ email: req.body.email });
    return user;
  }
  //registering user
  static async registerUser(req) {
    req.body.password = handlePassword.encryptPassword(req.body.password);

    const user = await UserModel.create(req.body);

    return user;
  }

  static testServiceFunction(req) {
    req.body.names = req.body.names.toUpperCase();
    const { num1, num2 } = req.body;

    const sum = num1 + num2 + 1;
    req.body.sum = sum;
    return req.body;
  }
}

export default UserServiceS;
