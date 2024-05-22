const collection = require('./database');
const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(cors(
    {
        origin: [],
        methods: ["POST"],
        credentials: true
    }
));

app.post('/ContactUs', async (req, res) => {
    const { Full_Name, Email, Subject, Description } = req.body;

    const data = {
        Full_Name: Full_Name,
        Email: Email,
        Subject: Subject,
        Description: Description, 
    }

    try {
            await collection.insertMany([data]);
            res.status(200).json({ message: "success" });
    } 
    
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "error" });
    }
});


app.listen(process.env.PORT || 8000, () => { 
    console.log("Server is Running");
});
