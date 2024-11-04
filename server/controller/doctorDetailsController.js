const asyncHandler = require("express-async-handler");
const Doctor = require("../model/doctorDetailsModel");
require("dotenv").config();

const registerDoctor = asyncHandler(async (req, res) => {
    const { name, speciality, experience, phonenumber, address,email} = req.body;
    if (!name || !speciality || !experience || !phonenumber || !address ||!email) {
        res.status(400);
        throw new Error("Please fill all required fields");
    }
    const doctorExists = await Doctor.findOne({ "email": email });
    if (doctorExists) {
        return res.status(400).json({ message: "Doctor already exists" });
    }
    const newDoctor = await Doctor.create({
        name,
        speciality,
        experience,
        phonenumber,
        address,
        email
    });

    res.status(201).json({ message: "Doctor registered successfully", doctor: newDoctor });
});
const getDoctor = asyncHandler(async (req, res) => {
    const doctors = await Doctor.find({});
    res.status(200).json(doctors);
});

module.exports = { registerDoctor ,getDoctor};