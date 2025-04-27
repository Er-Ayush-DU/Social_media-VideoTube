import { asyncHandler } from '../utils/asyncHandler.js';   // jab by default ka use na ho to { } iss bracket mai import karvate hai.



const registerUser = asyncHandler(async (req, res) => {

  const { Fullname, email, username, password } = req.body;

  res.status(200).json({ message: "Hello Ayush", user: { Fullname, email, username } });
  




  // res.status(200).json({message: "hello Ayush"})
})

export default registerUser;


