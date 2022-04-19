const fs = require("fs");

export default function handler(req, res) {
    const data = fs.readFileSync("./public/data/users.json");
    res.status(200).json(data);
}