import React, { useRef } from 'react';
import { Box, createTheme, ThemeProvider, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import buildyourhome from '../assets/images/buy-house-removebg.png';
import colors from '../common/colors';
import RealEstate1 from '../assets/images/realestate1.jpg';
import RealEstate2 from '../assets/images/realestate2.jpg';
import RealEstate3 from '../assets/images/realestate3.jpg';

const poppinsTheme = createTheme({
    typography: {
        fontFamily: "Poppins, Arial, sans-serif",
    },
});

function RealEstate() {
    const projectsRef = useRef(null);

    const handleBrowseClick = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <ThemeProvider theme={poppinsTheme}>
            <Box
                sx={{
                    mt: "80px",
                    width: "100vw",
                    minHeight: '100vh',
                    background: colors.background,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    px: 2,
                    pb: 8,
                }}
            >
                {/* Hero Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        maxWidth: 1200,
                        mt: 4,
                        mb: 6,
                        gap: 6,
                    }}
                >
                    <Box sx={{ flex: 1, minWidth: 300 }}>
                        <Typography
                            sx={{
                                fontSize: { xs: '2rem', md: '2.8rem' },
                                fontWeight: 900,
                                color: colors.primary,
                                mb: 2,
                                lineHeight: 1.2,
                            }}
                        >
                            Discover Your Dream Home
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '0.9rem', md: '0.9rem' },
                                color: colors.dark,
                                mb: 3,
                                maxWidth: 500,
                            }}
                        >
                            Explore a curated selection of real estate projects from top companies.
                            Find homes under construction and completed properties, and buy directly from trusted developers.
                            Secure your future in a vibrant community today!
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                background: colors.primary,
                                color: colors.white,
                                fontWeight: 600,
                                fontSize: 18,
                                px: 4,
                                py: 1.5,
                                borderRadius: 3,
                                textTransform: "none",
                                boxShadow: 2,
                                whiteSpace: "nowrap",
                                '&:hover': {
                                    background: colors.secondary,
                                    color: colors.dark,
                                },
                            }}
                            onClick={handleBrowseClick}
                        >
                            Browse Real Estates
                        </Button>
                    </Box>
                    <Box sx={{
                        flex: 1,
                        display: 'flex', justifyContent: 'center', minWidth: 300
                    }}>
                        <img
                            src={buildyourhome}
                            alt="Build your home"
                            style={{
                                height: 'auto',
                                width: '100%',
                                maxWidth: 420,
                                borderRadius: 24,
                                boxShadow: '0 8px 32px rgba(136,132,255,0.10)',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                </Box>

                {/* Example Real Estate Companies Section */}
                <Box ref={projectsRef} sx={{ width: '100%', maxWidth: 1200 }}>
                    <Typography
                        sx={{
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            fontWeight: 300,
                            color: colors.secondary,
                            mb: 3,
                            textAlign: 'center',
                        }}
                    >
                        Featured Real Estate Projects
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {/* Example cards, replace with real data */}
                        <Grid item xs={12} sm={6} md={4} >
                            <Card sx={{ borderRadius: 3 }} elevation="0">
                                <CardMedia
                                    component="img"
                                    sx={{ height: "200px" }}
                                    image={RealEstate1}
                                    alt="Modern Heights"
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 400, color: colors.primary }}>
                                        Modern Heights
                                    </Typography>
                                    <Typography sx={{ color: colors.dark, mb: 1 }}>
                                        Addis Ababa | Under Construction
                                    </Typography>
                                    <Typography sx={{ color: colors.muted, fontSize: 15 }}>
                                        Luxury apartments with city views and modern amenities. Completion: 2026.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ borderRadius: 3 }} elevation="0">
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    sx={{ height: "200px" }}
                                    image={RealEstate2}
                                    alt="Sunset Villas"
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 400, color: colors.primary }}>
                                        Sunset Villas
                                    </Typography>
                                    <Typography sx={{ color: colors.dark, mb: 1 }}>
                                        Bahir Dar | Completed
                                    </Typography>
                                    <Typography sx={{ color: colors.muted, fontSize: 15 }}>
                                        Spacious family homes near Lake Tana. Ready to move in!
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ borderRadius: 3 }} elevation="0">
                                <CardMedia
                                    component="img"
                                    sx={{ height: "200px" }}
                                    image={RealEstate3}
                                    alt="Green Park Residences"
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 400, color: colors.primary }}>
                                        Green Park Residences
                                    </Typography>
                                    <Typography sx={{ color: colors.dark, mb: 1 }}>
                                        Hawassa | Under Construction
                                    </Typography>
                                    <Typography sx={{ color: colors.muted, fontSize: 15 }}>
                                        Eco-friendly gated community with parks and playgrounds.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default RealEstate;