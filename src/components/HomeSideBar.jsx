import React, { useState } from "react";
import {
    Box,
    Drawer,
    Typography,
    Slider,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
    Button,
    Divider,
    TextField,
} from "@mui/material";
import colors from "../common/colors";

const propertyTypes = ["Real state", "Apartment", "Condo", "Villa"];
const locations = ["Addis Ababa", "Adama", "Bahir Dar", "Hawassa"];

function HomeSideBar({ open = true, onFilter }) {
    const [price, setPrice] = useState([100000, 1000000]);
    const [bedrooms, setBedrooms] = useState("");
    const [propertyType, setPropertyType] = useState([]);
    const [location, setLocation] = useState("");

    const handleTypeChange = (type) => {
        setPropertyType((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    const handleFilter = () => {
        if (onFilter) {
            onFilter({ price, bedrooms, propertyType, location });
        }
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                width: 280,
               height: "calc(100vh - 64px)",
                background: colors.background,
                padding: 2,
                boxSizing: "border-box",
                borderRight: `1px solid ${colors.grey}`,
                position: "relative",
                alignItems: 'space-evenly',
                top: 64, 
            }}
        >
            <Typography variant="h6" sx={{ mb: 2, fontFamily: "Poppins, Arial, sans-serif" }}>
                Filter Houses
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {/* Price Range */}
            <Typography gutterBottom sx={{ fontWeight: 500, fontFamily: "Poppins, Arial, sans-serif", }}>
                Price Range (ETB)
            </Typography>
            <Slider
                value={price}
                min={50000}
                max={5000000}
                step={10000}
                onChange={(_, val) => setPrice(val)}
                valueLabelDisplay="auto"
                sx={{ color: colors.primary, mb: 2 }}
            />
            <Box
            display='flex'
            justifyContent='space-between'
            flexWrap='Wrap'
            

            >
                <Typography gutterBottom sx={{fontFamily: "Poppins, Arial, sans-serif", fontSize: '0.9rem' }}>
                    {
                        price[0].toLocaleString('en-US', { style: 'currency', currency: 'ETB' })
                    }
                </Typography>
                 <Typography gutterBottom sx={{ fontFamily: "Poppins, Arial, sans-serif", fontSize: '0.9rem' }}>
                   -
                </Typography>
                <Typography gutterBottom sx={{ fontFamily: "Poppins, Arial, sans-serif", fontSize: '0.9rem' }}>
                    {
                        price[1].toLocaleString('en-US', { style: 'currency', currency: 'ETB' })
                    }
                </Typography>
            </Box>
            {/* Bedrooms */}
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ fontFamily: "Poppins, Arial, sans-serif" }}>Bedrooms</InputLabel>
                <Select
                    value={bedrooms}
                    label="Bedrooms"
                    sx={{ fontFamily: "Poppins, Arial, sans-serif" }}
                    onChange={(e) => setBedrooms(e.target.value)}
                >
                    <MenuItem value="" sx={{ fontFamily: "Poppins, Arial, sans-serif" }}>Any</MenuItem>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <MenuItem
                            sx={{ fontFamily: "Poppins, Arial, sans-serif" }}
                            key={num} value={num}>{num}+</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Property Type */}
            <Typography sx={{ fontWeight: 500, mb: 1, fontFamily: "Poppins, Arial, sans-serif" }}>Property Type</Typography>
            <Box sx={{ mb: 2 }}>
                {propertyTypes.map((type) => (
                    <FormControlLabel

                        key={type}
                        control={
                            <Checkbox
                                checked={propertyType.includes(type)}
                                onChange={() => handleTypeChange(type)}
                                sx={{ color: colors.primary }}
                            />
                        }
                        label={type}
                        componentsProps={{
                            typography: { sx: { fontFamily: "Poppins, Arial, sans-serif" } }
                        }}
                    />
                ))}
            </Box>

            {/* Location */}
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ fontFamily: "Poppins, Arial, sans-serif" }}>Location</InputLabel>
                <Select
                    value={location}
                    label="Location"
                    sx={{ fontFamily: "Poppins, Arial, sans-serif" }}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <MenuItem value="" sx={{ fontFamily: "Poppins, Arial, sans-serif" }}>Any</MenuItem>
                    {locations.map((loc) => (
                        <MenuItem key={loc} value={loc} sx={{ fontFamily: "Poppins, Arial, sans-serif" }}>{loc}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                    mt: 2,
                    fontFamily: "Poppins, Arial, sans-serif",
                    background: colors.primary,
                    color: colors.white,
                    textTransform: "none",
                }}
                onClick={handleFilter}
            >
                Apply Filters
            </Button>
        </Box>
    );
}

export default HomeSideBar;