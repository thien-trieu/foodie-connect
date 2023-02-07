// // const { UsersModel } = require('../models');
// const { connect } = require('getStream');
// const bcrypt = require('bcrypt');
// const StreamChat = require('stream-chat').StreamChat;
// const crypto = require('crypto');

// require('dotenv').config();

// const api_key = process.env.STREAM_API_KEY;
// const api_secret = process.env.STREAM_API_SECRET;
// const app_id = process.env.STREAM_APP_ID;

// const register = async (req, res) => {
//   try {
//     const { name, email, password, location } = req.body;

//     const userId = crypto.randomBytes(16).toString('hex');

//     const serverClient = connect(api_key, api_secret, app_id);

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const token = serverClient.createUserToken(userId);

//     res.status(200).json({ token, name, email, userId, hashedPassword, location });
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({ message: error });
//   }
// };

// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const serverClient = connect(api_key, api_secret, app_id);
//     const client = StreamChat.getInstance(api_key, api_secret);

//     const { users } = await client.queryUsers({ email: email });

//     if (!users.length) return res.status(400).json({ message: 'Invalid Credentials' });

//     const success = await bcrypt.compare(password, users[0].hashedPassword);

//     const token = serverClient.createUserToken(users[0].id);

//     if (success) {
//       res.status(200).json({ token, email: users[0].email, userId: users[0].id });
//     } else {
//       res.status(500).json({ message: 'Invalid Credentials' });
//       }
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({ message: error });
//   }
// };





// // const getAll = (req, res) => {
// //   UsersModel.getAll()
// //     .then(users => {
// //       if (users.length === 0) {
// //         return res.status(200).send({ message: 'No Users' });
// //       }

// //       res.status(200).send({ message: 'List of all the users', users });
// //     })
// //     .catch(error => {
// //       console.log(error.message);
// //       res
// //         .status(500)
// //         .send({ message: 'Error reading users', error: error.message });
// //     });
// // };


// module.exports = { getAll, register, login };
