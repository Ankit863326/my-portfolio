import React, { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            About Me
          </Typography>
        </motion.div>

        {/* Main Content */}
        <Grid container spacing={6} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    width: { xs: 280, md: 350 },
                    height: { xs: 350, md: 420 },
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -10,
                      left: -10,
                      right: -10,
                      bottom: -10,
                      background:
                        'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                      borderRadius: '25px',
                      zIndex: -1,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="ankit1.jpg"
                    alt="Ankit Singh"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '15px',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  color: 'primary.main',
                  fontWeight: 600,
                }}
              >
                Hello! I'm Ankit Singh
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                I'm a passionate Full Stack Developer with over 3+ years of
                experience in creating exceptional digital experiences. My
                journey began with a curiosity about how things work, which led
                me to pursue computer science and eventually specialize in web
                development.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                I love the entire process of developing creative solutions, from
                brainstorming and wireframing to coding and deployment. My
                expertise spans both front-end and back-end technologies,
                allowing me to build complete, scalable applications.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community. I believe in continuous learning
                and staying updated with the latest trends in technology.
              </Typography>

              {/* Traits */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                }}
              >
                {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map(
                  (trait, index) => (
                    <motion.div
                      key={trait}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <Box
                        sx={{
                          px: 3,
                          py: 1,
                          borderRadius: '25px',
                          background:
                            'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                          color: 'white',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                        }}
                      >
                        {trait}
                      </Box>
                    </motion.div>
                  )
                )}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;

