module.exports = {
    PORT: 3000,
    USERS: [
        {
            username: 'john.doe@gmail.com',
            password: 'john@123'
        }
    ],
    PATIENT_HELATH: 
    {
        "Timestamp": "YYYY-MM-DD hh:mm:ss",
        "Personal info": {
            "Name": "John Doe",
            "Email": "john.doe@gmail.com",
            "Phone": "9876543210",
            "Age": "25 years"
        },
        "Medical Condition": {
            "Heart Disease": false,
            "Diabetics": true,
            "Blood Pressure": {
                "High BP": true,
                "Low BP": false
            }
        },
        "Health Status": {
            "Height": "175 cms",
            "Weight": "65 kg",
            "Pulse Rate": "88 bpm",
            "BP": "120/160", 
            "BMI": 25
        }
    }
};
