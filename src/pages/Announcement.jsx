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
                    minHeight: "100vh",
                    background: colors.background,
                    px: { xs: 2, md: 6 },
                    py: 6,
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
                        mb: 2,
                        letterSpacing: 1,
                        textAlign: "center",
                    }}
                >
                    What's New This Week?
                </Typography>
                <Typography
                    sx={{
                        color: colors.dark,
                        fontSize: 18,
                        mb: 5,
                        textAlign: "center",
                        maxWidth: 600,
                    }}
                >
                    Stay up to date with the latest deals, events, and featured projects in the real estate world!
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 4,
                        alignItems:'stretch',
                        width: "100%",
                        flexWrap:'wrap',
                        pb: 2,
                        justifyContent: { xs: "flex-start", md: "center" },
                    }}
                >
                    {announcements.map((item, idx) => (
                        <Card
                            key={idx}
                            sx={{
                                minWidth: 320,
                                maxWidth: 340,
                                borderRadius: 4,
                                boxShadow: 4,
                                background: colors.white,
                                transition: "transform 0.2s",
                                "&:hover": { transform: "translateY(-8px)", boxShadow: 8 },
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                flexShrink: 0,
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.title}
                                sx={{
                                    height: "300px",
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 16,
                                    objectFit: "cover",
                                }}
                            />
                            <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
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
                                <Typography variant="h6" sx={{ fontWeight: 700, color: colors.primary, mb: 1 }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ color: colors.dark, fontSize: 15, mb: 2 }}>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Announcement;