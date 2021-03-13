const healthInfo = require('../../constants/appConstants').PATIENT_HELATH;

exports.getHealthInfo = async (req,res) => {
    try{
        res.status(200).send({
            status: 'success',
            payload: healthInfo
        })
    }catch(err){
        res.status(400);
    }
};