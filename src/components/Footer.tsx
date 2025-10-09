import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        py: 4,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              © {new Date().getFullYear()} Ankit Singh. All rights reserved.
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                textAlign: { xs: 'center', md: 'right' },
              }}
            >
              Built with ❤️ using React, TypeScript & Material-UI
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;