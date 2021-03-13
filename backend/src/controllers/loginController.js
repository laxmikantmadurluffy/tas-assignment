const users = require('../../constants/appConstants').USERS;

exports.login = async (req,res) => {
    try{
        const { username, password } = req.body;
        const user = users.find(u => { return u.username === username && u.password === password });
        if (user) {
            res.status(200).send({
                status: 'success'
            })
        } else {
            res.status(202).send({
                status:'incorrect_pwd',
                message:"Username or password is incorrect"
            })
        }
    }catch(err){
        res.status(400);
    }
};