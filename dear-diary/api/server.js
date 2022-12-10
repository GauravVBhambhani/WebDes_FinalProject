const express = require('express')
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const JWT_SECRET = "8ofg8375fgeiyrfblo8734gr90()JHKEBVIU4898209348URUJD4UI??{}[]"

const mongoose = require('mongoose')
const mongoURL = "mongodb+srv://gauravbhambhani:gaurav@newcluster.pk9lfqr.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connection to database estabilished...");
}).catch((e) => console.log(e))

app.post("/post", async (req, res) => {
    console.log(req.body);
    const { data } = req.body;

    try {
        if (data == "gaurav") {
            res.send({ status: "ok" });
        } else {
            res.send({ status: "User doesn't exist!" });
        }
    } catch (error) {
        res.send({ status: "Something went wrong!" });
    }
});

require('./models/userSchema')

const User = mongoose.model("UserInfo");

app.post('/user/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const encryptPassword = await bcrypt.hash(password, 10)
    try {

        const existingUser = await User.findOne({ email })
        if (existingUser) return res.send("User account already exists.")

        await User.create({
            firstName,
            lastName,
            email,
            password: encryptPassword
        });
        res.send({ status: "success" });
    } catch (error) {
        res.send({ status: "error" })
    }
});

app.post('/user/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.json({ error: "User doesn't exist." });

    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email }, JWT_SECRET)

        if (res.status(201)) {
            return res.json({ status: "success", data: token });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "Invalid password!" });
});

app.post("/userAccount", async (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET);
        console.log(user);

        const useremail = user.email;
        User.findOne({ email: useremail })
            .then((data) => {
                res.send({ status: "ok", data: data });
            })
            .catch((error) => {
                res.send({ status: "error", data: error });
            });
    } catch (error) { }
});

app.listen(3002, () => {
    console.log("Server active...")
});