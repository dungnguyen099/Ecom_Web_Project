import { Box, Typography, Link } from '@mui/material';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <Box sx={{ backgroundColor: '#c7e1ff', padding: '40px 20px' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(5, 1fr)' },
          gap: '20px',
        }}
      >
        {/* Left Section */}
        <Box>
          <Box display="flex" alignItems="center" mb={2}>
            <Box
              sx={{
                backgroundColor: '#58c9f3',
                borderRadius: '50%',
                width: 50,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
              }}
            >
              <Typography sx={{ color: 'white', fontSize: 24 }}>E</Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              E-Comm
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
            since the 1500s.
          </Typography>
        </Box>

        {/* Follow Us */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Follow Us
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </Typography>
          <Box>
            {/* Social Media Icons (you can replace with actual icons) */}
            <Link href="#" sx={{ color: '#58c9f3', mr: 2 }}>
              Facebook
            </Link>
            <Link href="#" sx={{ color: '#58c9f3' }}>
              Twitter
            </Link>
          </Box>
        </Box>

        {/* Contact Us */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            E-Comm, 4578 Marmora Road, Glasgow D04 89GR
          </Typography>
        </Box>

        {/* Information Links */}
        {['Information', 'Service', 'My Account', 'Our Offers'].map(
          (section) => (
            <Box key={section}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                {section}
              </Typography>
              <Box>
                <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
                  About Us
                </Link>
                <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
                  Information
                </Link>
                <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
                  Privacy Policy
                </Link>
                <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
                  Terms & Conditions
                </Link>
              </Box>
            </Box>
          )
        )}
      </Box>

      {/* Footer Bottom Section */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2" color="text.secondary">
          © 2018 Ecommerce theme by www.bisenbaev.com
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
