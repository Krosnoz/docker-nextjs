const fs = require('fs');

export default function handler(req, res) {
    if (req.method === 'POST') {
        const user = {pseudo: req.body.user.pseudo, email: req.body.user.email};

        fs.readFile('./public/data/users.json', function (err, data) {
            const json = JSON.parse(data);
            json.push(user);
            fs.writeFile("./public/data/users.json", JSON.stringify(json), function(error){
                console.log(error);
            });

            res.status(200).json({ success: "User added."});
        })
    } else {
        res.send("Only POST route.")
    }

}