import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    LinearProgress,
    MenuItem,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import colors from "../common/colors";

const cities = [
    "Addis Ababa", "Adama", "Bahir Dar", "Hawassa", "Dire Dawa", "Mekelle", "Gondar", "Jimma", "Jijiga", "Shashamane"
];

const questions = [
    {
        label: "Full Name",
        name: "fullName",
        type: "text",
        placeholder: "Enter your full name",
    },
    {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "Enter your email address",
    },
    {
        label: "Phone Number",
        name: "phone",
        type: "tel",
        placeholder: "Enter your phone number",
    },
    {
        label: "Date of Birth",
        name: "dob",
        type: "date",
        placeholder: "",
    },
    {
        label: "Where do you live?",
        name: "city",
        type: "select",
        options: cities,
        placeholder: "Select your city",
    },
    {
        label: "Do you have experience with selling?",
        name: "experience",
        type: "radio",
        options: ["Yes", "No"],
        placeholder: "",
    },
];

function BecomeSeller() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        city: "",
        experience: "",
    });

    const currentQuestion = questions[step];
    const totalSteps = questions.length;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleNext = () => {
        if (step < totalSteps - 1) setStep((prev) => prev + 1);
        // Add validation if needed
    };

    const handleBack = () => {
        if (step > 0) setStep((prev) => prev - 1);
    };

    return (
        <Box
            width='100%'
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: colors.background,
            }}
        >
            <Box
                sx={{

                    width: '50%',
                    mx: "auto",
                    mt: 8,
                    p: 4,
                    background: colors.white,
                    borderRadius: 3,
                    boxShadow: 3,
                    fontFamily: "Poppins, Arial, sans-serif",
                }}
            >
                <Typography variant="h5" sx={{ mb: 3, fontFamily: "Poppins, Arial, sans-serif", color: colors.primary }}>
                    Become a Seller
                </Typography>
                <LinearProgress
                    variant="determinate"
                    value={((step + 1) / totalSteps) * 100}
                    sx={{
                        mb: 3,
                        height: 8,
                        borderRadius: 5,
                        background: colors.background,
                        "& .MuiLinearProgress-bar": { backgroundColor: colors.primary }
                    }}
                />
                <Typography sx={{ mb: 2, fontFamily: "Poppins, Arial, sans-serif", color: colors.dark }}>
                    {currentQuestion.label}
                </Typography>
                {["text", "email", "tel"].includes(currentQuestion.type) && (
                    <TextField
                        fullWidth
                        name={currentQuestion.name}
                        type={currentQuestion.type}
                        placeholder={currentQuestion.placeholder}
                        value={answers[currentQuestion.name]}
                        onChange={handleChange}
                        sx={{
                            mb: 2,
                            fontFamily: "Poppins, Arial, sans-serif",
                            background: colors.background,
                            "& .MuiOutlinedInput-root": {
                                fontFamily: "Poppins, Arial, sans-serif",
                            },
                            "& .MuiInputLabel-root": {
                                fontFamily: "Poppins, Arial, sans-serif",
                            },
                        }}
                        InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
                    />
                )}
                {currentQuestion.type === "date" && (
                    <TextField
                        fullWidth
                        name={currentQuestion.name}
                        type="date"
                        value={answers[currentQuestion.name]}
                        onChange={handleChange}
                        sx={{
                            mb: 2,
                            fontFamily: "Poppins, Arial, sans-serif",
                            background: colors.background,
                            "& .MuiOutlinedInput-root": {
                                fontFamily: "Poppins, Arial, sans-serif",
                            },
                            "& .MuiInputLabel-root": {
                                fontFamily: "Poppins, Arial, sans-serif",
                            },
                        }}
                        InputLabelProps={{ shrink: true }}
                        InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
                    />
                )}
                {currentQuestion.type === "select" && (
                    <TextField
                        select
                        fullWidth
                        name={currentQuestion.name}
                        value={answers[currentQuestion.name]}
                        onChange={handleChange}
                        sx={{
                            mb: 2,
                            fontFamily: "Poppins, Arial, sans-serif",
                            background: colors.background,
                            "& .MuiOutlinedInput-root": {
                                fontFamily: "Poppins, Arial, sans-serif",
                            },
                            "& .MuiInputLabel-root": {
                                fontFamily: "Poppins, Arial, sans-serif",
                            },
                        }}
                        InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
                    >
                        {currentQuestion.options.map((city) => (
                            <MenuItem key={city} value={city} sx={{ fontFamily: "Poppins, Arial, sans-serif" }}>
                                {city}
                            </MenuItem>
                        ))}
                    </TextField>
                )}
                {currentQuestion.type === "radio" && (
                    <RadioGroup
                        name={currentQuestion.name}
                        value={answers[currentQuestion.name]}
                        onChange={handleChange}
                        sx={{ mb: 2, fontFamily: "Poppins, Arial, sans-serif" }}
                    >
                        {currentQuestion.options.map((option) => (
                            <FormControlLabel
                                key={option}
                                value={option}
                                control={<Radio sx={{ color: colors.primary }} />}
                                label={option}
                                sx={{ fontFamily: "Poppins, Arial, sans-serif" }}
                            />
                        ))}
                    </RadioGroup>
                )}
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <Button
                        variant="outlined"
                        onClick={handleBack}
                        disabled={step === 0}
                        sx={{
                            fontFamily: "Poppins, Arial, sans-serif",
                            color: colors.primary,
                            borderColor: colors.primary,
                            "&:hover": { borderColor: colors.secondary, color: colors.secondary }
                        }}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        disabled={!answers[currentQuestion.name]}
                        sx={{
                            fontFamily: "Poppins, Arial, sans-serif",
                            background: colors.primary,
                            color: colors.white,
                            textTransform: "none",
                            "&:hover": { background: colors.secondary },
                        }}
                    >
                        {step === totalSteps - 1 ? "Finish" : "Next"}
                    </Button>
                </Box>
                <Typography sx={{ mt: 3, color: colors.primary, fontFamily: "Poppins, Arial, sans-serif" }}>
                    Step {step + 1} of {totalSteps}
                </Typography>
            </Box>
        </Box>
    );
}

export default BecomeSeller;