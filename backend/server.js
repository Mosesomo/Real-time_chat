const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv').config()

const app = express();
const port = 3000;
app.use(cors({ origin: true }));
app.use(express.json());

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const response = await axios.put("https://api.chatengine.io/users/",
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": process.env.PRIVATE_KEY}}
        );
        return res.status(200).json(response.data);
    } catch (e){
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});