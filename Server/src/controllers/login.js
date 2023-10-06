const users = require('../utils/users')

module.exports = (req, res) => {
    const {email, password} = req.query;
    const access = false;
    users.forEach((users) => {
        if(users[0] === email && users[1] === password){
                access = true;
            }
    }); return res.status(200).json({access})
    }
