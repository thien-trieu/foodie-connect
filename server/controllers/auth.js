const { connect } = require('getstream'); 
const bcrypt = require('bcrypt'); // hash passwords
const StreamChat = require('stream-chat').StreamChat; // Instance of streamchat
const crypto = require('crypto'); // The crypto module provides a way of handling encrypted data.

require('dotenv').config();
// Enviroment Variables - Update in .evn file
// get API keys from getstream.io
const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

// req: what we get from the front end
// res: send back to front end
const signup = async (req, res) => {
    try {
        const { fullName, username, password, phoneNumber } = req.body;
        // create random userId
        const userId = crypto.randomBytes(16).toString('hex');
        // connect to getstream client server
        const serverClient = connect(api_key, api_secret, app_id);
        // ensure password is hashed
        const hashedPassword = await bcrypt.hash(password, 10);
        // create user token 
        const token = serverClient.createUserToken(userId);
        // Send data back to front end
        const data = { token, fullName, username, userId, hashedPassword, phoneNumber }
        console.log('Signing Up User: ', data)

        res.status(200).json({ token, fullName, username, userId, hashedPassword, phoneNumber });
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // connect to getstream client server
        const serverClient = connect(api_key, api_secret, app_id);
        // create an instance of streamchat to query all the users in the database
        const client = StreamChat.getInstance(api_key, api_secret);
        // destructure all the users, to check and see if streamchat user database has a matching username
        const { users } = await client.queryUsers({ name: username });
        // if no user matching, send error response
        if(!users.length) return res.status(400).json({ message: 'User not found' });
        // if user , check if password matches hash
        const success = await bcrypt.compare(password, users[0].hashedPassword);
        // create user token
        const token = serverClient.createUserToken(users[0].id);
        // if password matches then send date back to front end
        const data = { 
          token, 
          fullName: users[0].fullName, 
          username, 
          userId: users[0].id
        }
        console.log("Login User: ", data)
        if(success) {
            res.status(200).json({ token, fullName: users[0].fullName, username, userId: users[0].id});
        } else {
            res.status(500).json({ message: 'Incorrect password' });
        }
    } catch (error) {ads
        console.log(error);

        res.status(500).json({ message: error });
    }
};

module.exports = { signup, login }