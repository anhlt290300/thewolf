import userRepository from "../respositories/user.js";
import { EventEmitter } from "events";
import { body, validationResult } from "express-validator";
import HttpStatusCode from '../exception/HttpStatusCode.js'

const myEvent = new EventEmitter();

myEvent.on("event.register.user", (params) => {
  console.log(`They talked about : ${JSON.stringify(params)}`);
});

const login = async (req, res) => {
  //console.log(req.body)
  const errors = validationResult(req.body);
  if (!errors.isEmpty()) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: errors.array(),
    });
  }
  const { email, password } = await req.body;
  //console.log(email)
  //call repository
  try {
    let existingUser = await userRepository.login({ email, password });
    res.status(HttpStatusCode.OK).json({
      message: "Login user successfully",
      data: existingUser,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const register = async (req, res) => {

  const { firstname, lastname, gender, birthday, email, password } = await req.body;
  //console.log(firstname)
  myEvent.emit('event.register.user', {email, password})

  try {
    // const user = await userRepository.register({
    //   firstname,
    //   lastname,
    //   gender,  
    //   birthday,
    //   email,
    //   password,
    // });
    console.log(firstname)
    res.status(HttpStatusCode.INSERT_OK).json({
      message: 'Register user successfully',
      //data: user
    })
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),      
    })
  }
};

export default { login, register };
