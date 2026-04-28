import React, { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Avatar,
  useTheme,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';

// --- DATA: Quick Facts ---
const quickFacts = [
  'Aspiring Software Engineer',
  'Full-Stack Developer',
  'Tech Enthusiast',
  'Continuous Learner',
];

const AboutSection: React.FC = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Section Heading */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 8,
                fontWeight: 700,
                background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About Me
            </Typography>
          </motion.div>

          <Grid container spacing={6} alignItems="flex-start">
            {/* Left Col: Profile & Bio */}
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Stack spacing={4}>
                  {/* Profile Image - Small & Circular */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: 120, // Small size
                        height: 120,
                        borderRadius: '50%', // Circular
                        padding: '4px',
                        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                        boxShadow: '0 10px 30px rgba(37, 117, 252, 0.3)',
                      }}
                    >
                      <Avatar
                        src="ankit1.jpg" // Ensure this image is in your public folder
                        alt="Ankit Singh"
                        sx={{
                          width: '100%',
                          height: '100%',
                          border: `4px solid ${theme.palette.background.default}`,
                        }}
                      />
                    </Box>
                  </Box>

                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}
                    >
                      Passionate Developer & Problem Solver
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}
                    >
                      I'm a dedicated software engineering student with a passion for
                      creating innovative digital solutions. With experience in
                      full-stack development, I enjoy working across the entire stack
                      to build scalable applications.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                    >
                      When I'm not coding, you'll find me exploring the cosmos,
                      writing poetry, or BGMI.
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            </Grid>

            {/* Right Col: Quick Facts Card */}
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '6px',
                      height: '100%',
                      background: 'linear-gradient(180deg, #6a11cb 0%, #2575fc 100%)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                      Quick Facts
                    </Typography>
                    <Stack spacing={2}>
                      {quickFacts.map((fact, index) => (
                        <Box
                          key={index}
                          sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              bgcolor: index % 2 === 0 ? '#2575fc' : '#6a11cb',
                              boxShadow: '0 0 10px rgba(37, 117, 252, 0.5)',
                            }}
                          />
                          <Typography variant="body1" color="text.secondary">
                            {fact}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;