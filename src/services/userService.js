import UserModel from "../models/user";
class UserServiceS {
  //registering user
  static async registerUser(req) {
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
