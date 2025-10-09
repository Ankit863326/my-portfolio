import React, { useState, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  useTheme,
  Snackbar,
  Alert as MuiAlert,
  AlertProps, // Import AlertProps for typing
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Instagram,
  Send,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';

// MUI's Alert needs to be wrapped in a forwardRef to be used inside a Snackbar
// Add types for props and ref
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const contactInfo = [
  {
    icon: <Email />,
    title: 'Email',
    value: 'ankitsinghan226@gmail.com',
    link: 'mailto:ankitsinghan226@gmail.com',
  },
  {
    icon: <Phone />,
    title: 'Phone',
    value: '+91 63068 43661',
    link: 'tel:+916306843661',
  },
  {
    icon: <LocationOn />,
    title: 'Location',
    value: 'Mumbai, India',
    link: null,
  },
];

const socialLinks = [
  {
    icon: <LinkedIn />,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ankit-singh-048aa02bb',
    color: '#0077B5',
  },
  {
    icon: <GitHub />,
    name: 'GitHub',
    url: 'https://github.com/Ankit8633',
    color: '#333333',
  },
  {
    icon: <Instagram />,
    name: 'Instagram',
    url: 'https://instagram.com/fearless8633',
    color: '#E1306C',
  },
];

const ContactSection: React.FC = () => {
  const theme = useTheme();
  // Add type for the ref
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error' | 'info' | 'warning',
  });

  // Add type for the event object 'e'
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Using async/await is a good practice for handlers that might perform async operations
  // Add type for the event object 'e'
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields.',
        severity: 'error',
      });
      return;
    }

    // In a real app, you would send the data to a server here
    // For example: await sendEmail(formData);
    console.log('Form submitted:', formData);

    setSnackbar({
      open: true,
      message: "Message sent successfully! I'll get back to you soon.",
      severity: 'success',
});

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  // Add types for 'event' and 'reason'
  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // Handler for opening mailto/tel links correctly
  // Add type for 'link'
  const handleLinkClick = (link: string | null) => {
    if (link) {
      window.location.href = link;
    }
  };
  
  // Handler for keyboard accessibility on contact info links
  // Add types for 'event' and 'link'
  const handleContactKeyPress = (event: React.KeyboardEvent<HTMLDivElement>, link: string | null) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleLinkClick(link);
    }
  };

  return (
    <Box
      id="contact"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you. Send me a message!
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h5"
                sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}
              >
                Contact Information
              </Typography>

              <Box sx={{ mb: 4 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Box
                      onClick={() => handleLinkClick(info.link)}
                      onKeyPress={(e) => handleContactKeyPress(e, info.link)}
                      role={info.link ? "link" : "group"}
                      tabIndex={info.link ? 0 : -1}
                      aria-label={`Contact by ${info.title}: ${info.value}`}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                        cursor: info.link ? 'pointer' : 'default',
                        '&:hover': {
                          '& .contact-icon': { transform: 'scale(1.1)' },
                        },
                      }}
                    >
                      <Box
                        className="contact-icon"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          background:
                            'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                          color: 'white',
                          mr: 3,
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: 'text.secondary', fontSize: '0.9rem' }}
                        >
                          {info.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: 'text.primary', fontWeight: 500 }}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              {/* Social Links */}
              <Typography
                variant="h6"
                sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}
              >
                Follow Me
              </Typography>

              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <IconButton
                      component="a" // Use anchor tag for links
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer" // Security best practice
                      aria-label={`Visit my ${social.name} profile`} // Accessibility
                      sx={{
                        width: 50,
                        height: 50,
                        bgcolor: 'background.default',
                        color: social.color,
                        border: '2px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          bgcolor: social.color,
                          color: 'white',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card sx={{ p: { xs: 1, sm: 2 } }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}
                  >
                    Send Me a Message
                  </Typography>

                  <Box component="form" noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name="name"
                          label="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          autoComplete="name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name="email"
                          label="Your Email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="subject"
                          label="Subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="message"
                          label="Message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={<Send />}
                          sx={{
                            background:
                              'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: theme.shadows[8],
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;