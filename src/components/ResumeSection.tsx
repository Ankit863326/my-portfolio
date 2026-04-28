import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';

// --- Data for the highlight cards ---
const resumeHighlights = [
  { title: 'Experience', description: '3+ Years' },
  { title: 'Projects', description: '50+' },
  { title: 'Clients', description: '20+' },
  { title: 'Awards', description: '5' },
];

const ResumeSection = () => {
  const resumeFileName = "ankit_resume.pdf";

  return (
    <Box id="resume" sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 3 }}>
          My Resume 📄
        </Typography>

        {/* --- View + Download Buttons --- */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>

            {/* View Button */}
            <Button
              variant="outlined"
              color="primary"
              href={`/${resumeFileName}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </Button>

            {/* Download Button */}
            <Button
              variant="contained"
              color="primary"
              href={`/${resumeFileName}`}
              download={resumeFileName}
              startIcon={<DownloadIcon />}
            >
              Download Resume
            </Button>

          </Box>
        </Box>

        {/* --- Highlight Grid --- */}
        <Grid container spacing={4}>
          {resumeHighlights.map((highlight, index) => (
            <Grid item xs={12} sm={6} md={3} key={highlight.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  bgcolor: 'background.paper',
                }}>
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
