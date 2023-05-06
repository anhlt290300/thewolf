// import {print, OutputType} from '../helpers/print.js'
import { User } from "../models/index.js";
import Exception from "../exception/exceptions.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async ({ email, password }) => {
  //print('login user in user repository, haha', OutputType.INFORMATION)
  let existingUser = await User.findOne({ email }).exec();
  if (existingUser) {
    //not encrypt password !
    let isMatch = await bcrypt.compare(password, existingUser.password);
    if (!!isMatch) {
      //create Java Web Token
      let token = jwt.sign(
        {
          data: existingUser,
        },
        process.env.SECRET_KEY,
        {
          //expiresIn: '60', //1 minute
          expiresIn: "30 days",
        }  
      );
      //clone an add more properties
      return {
        ...existingUser.toObject(),
        password: "not show",
        token: token,
      };
    } else {
      throw new Exception(Exception.WRONG_EMAIL_AND_PASSWORD);
    }
  } else {
    throw new Exception(Exception.WRONG_EMAIL_AND_PASSWORD);
  }
};


const register = async ({
  firstname,
  lastname,
  gender,
  email,
  password,
  birthday,
}) => {
  //validation already done
  //debugger;
  const existingUser = await User.findOne({ email }).exec();
  if (!!existingUser) {
    throw new Exception(Exception.USER_EXIST);
  }
  //encrypt password, use bcrypt
  //used for login purpose
  // const isMatched = await bcrypt.compare(password, existingUser.password)
  // if(isMatched) {

  // }
  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(process.env.SALT_ROUNDS)
  );
  //insert to db
  const newUser = await User.create({
    firstname,
    lastname,
    gender,
    birthday,
    email,
    password: hashedPassword,
  });
  return {
    ...newUser._doc,
    password: "Not show",
  };
  // print('register user with: name: '
  //     + name + ' email: ' + email + ' password:'
  //     +password + ' phone:' + phoneNumber+' address:'+address, OutputType.INFORMATION)
};
export default {
  login,
  register,
};
