import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config({ path: "../../" });
class Password {
  //return cypferText of password
  static encryptPassword(pswd) {
    // console.log(process.env.SALT);
    return bcrypt.hashSync(pswd, parseInt(process.env.SALT));
  }

  // function to return if password is matching true/false
  static checkPassword(hashedPswd, normalPswd) {
    return bcrypt.compareSync(normalPswd, hashedPswd);
  }
}

export default Password;
