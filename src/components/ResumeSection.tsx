import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

// Mock data based on the error log
const resumeHighlights = [
    { title: 'Experience', description: '3+ Years' },
    { title: 'Projects', description: '50+' },
    { title: 'Clients', description: '20+' },
    { title: 'Awards', description: '5' },
];

const ResumeSection = () => {
    return (
        <Box id="resume" sx={{ py: 12, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
                    My Resume
                </Typography>
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {resumeHighlights.map((highlight, index) => (
                        // THE FIX IS ON THE NEXT LINE: The extra ">" after <Grid was removed.
                        <Grid item xs={12} sm={6} md={3} key={highlight.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography variant="h4" color="primary">
                                        {highlight.description}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        {highlight.title}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ResumeSection;

