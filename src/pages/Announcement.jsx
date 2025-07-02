import buildyourhome from '../assets/images/build-your-home.png';
import colors from '../common/colors';
import { Box, Typography, Card, CardContent, CardMedia, Chip, Grid, createTheme, ThemeProvider } from "@mui/material";

const poppinsTheme = createTheme({
    typography: {
        fontFamily: "Poppins, Arial, sans-serif",
    },
});

const announcements = [
    {
        title: "🔥 New Real Estate Partner: Adeel Properties",
        description: "We are excited to announce a partnership with Adeel Properties! Enjoy a limited-time 10% discount on all new homes purchased this week.",
        image: buildyourhome,
        chip: "10% OFF",
        chipColor: colors.success,
        date: "This Week",
    },
    {
        title: "🏢 Upcoming Real Estate Expo",
        description: "Join us at the National Real Estate Expo this Saturday! Meet top developers, explore new projects, and get exclusive offers.",
        image: buildyourhome,
        chip: "Expo",
        chipColor: colors.primary,
        date: "Saturday",
    },
    {
        title: "🌟 Featured: Green Park Residences",
        description: "Eco-friendly gated community now open for booking. Special launch offers available for early buyers!",
        image: buildyourhome,
        chip: "Featured",
        chipColor: colors.secondary,
        date: "Now Open",
    },
];

function Announcement() {
    return (
        <ThemeProvider theme={poppinsTheme}>
            <Box
                sx={{
                    mt: "80px",
                    width: '100vw',
                    minHeight: "100vh",
                    background: colors.background,
                    px: { xs: 1, sm: 2, md: 6 },
                    py: { xs: 3, md: 6 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 900,
                        color: colors.primary,
                        mb: { xs: 1, md: 2 },
                        letterSpacing: 1,
                        textAlign: "center",
                        fontSize: { xs: "2rem", md: "2.5rem" },
                        lineHeight: 1.1,
                    }}
                >
                    What's New This Week?
                </Typography>
                <Typography
                    sx={{
                        color: colors.dark,
                        fontSize: { xs: 15, md: 18 },
                        mb: { xs: 3, md: 5 },
                        textAlign: "center",
                        maxWidth: 600,
                    }}
                >
                    Stay up to date with the latest deals, events, and featured projects in the real estate world!
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, sm: 3, md: 4 }}
                    justifyContent="center"
                    sx={{
                        width: "100%",
                        maxWidth: 1200,
                        pb: 2,
                    }}
                >
                    {announcements.map((item, idx) => (
                        <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: "flex" }}>
                            <Card
                                sx={{
                                    width: "100%",
                                    borderRadius: 4,
                                    boxShadow: 4,
                                    background: colors.white,
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                    display: "flex",
                                    flexDirection: "column",
                                    flexGrow: 1,
                                    "&:hover": { transform: "translateY(-6px) scale(1.03)", boxShadow: 8 },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.title}
                                    sx={{
                                        height: { xs: 160, sm: 200 },
                                        borderTopLeftRadius: 16,
                                        borderTopRightRadius: 16,
                                        objectFit: "cover",
                                    }}
                                />
                                <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", p: { xs: 2, sm: 3 } }}>
                                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                        <Chip
                                            label={item.chip}
                                            sx={{
                                                background: item.chipColor,
                                                color: item.chipColor === colors.success ? colors.white : colors.dark,
                                                fontWeight: 600,
                                                mr: 1,
                                                fontSize: 14,
                                            }}
                                        />
                                        <Typography sx={{ color: colors.muted, fontSize: 13 }}>{item.date}</Typography>
                                    </Box>
                                    <Typography variant="h6" sx={{
                                        fontWeight: 700,
                                        color: colors.primary,
                                        mb: 1,
                                        fontSize: { xs: 16, sm: 18 }
                                    }}>
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{
                                        color: colors.dark,
                                        fontSize: { xs: 14, sm: 15 },
                                        mb: 2,
                                        flexGrow: 1
                                    }}>
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default Announcement;