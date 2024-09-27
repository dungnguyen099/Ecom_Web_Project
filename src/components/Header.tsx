import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Link,
  Badge,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 40px',
        }}
      >
        {/* Left Section - Language and Currency */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ marginRight: 2 }}>EN/</Typography>
          <Typography sx={{ marginRight: 4 }}>USD</Typography>
        </Box>

        {/* Right Section - Profile, Cart, Search */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <IconButton>
            <AccountCircleIcon />
            <Typography sx={{ marginLeft: 1, fontWeight: 'bold' }}>
              My profile
            </Typography>
          </IconButton>

          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartIcon />
            </Badge>
            {/* <Typography sx={{ marginLeft: 50, fontWeight: 'bold' }}>
              Items
            </Typography> */}
          </IconButton>

          <Typography sx={{ fontWeight: 'bold', marginRight: 2 }}>
            $0.00
          </Typography>

          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Middle Section - Logo and Nav Links */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1,
          justifyContent: 'space-between',
          paddingX: 20,
        }}
      >
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <Box
            sx={{
              backgroundColor: '#58c9f3',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 1,
            }}
          >
            <Typography sx={{ color: 'white', fontSize: 20 }}>E</Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            E-Comm
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Link
            href="/"
            underline="none"
            sx={{ fontWeight: 'bold', color: '#3f3f3f' }}
          >
            HOME
          </Link>
          <Link
            href="/bags"
            underline="none"
            sx={{ fontWeight: 'bold', color: '#3f3f3f' }}
          >
            BAGS
          </Link>
          <Link
            href="/sneakers"
            underline="none"
            sx={{ fontWeight: 'bold', color: '#3f3f3f' }}
          >
            SNEAKERS
          </Link>
          <Link
            href="/belt"
            underline="none"
            sx={{ fontWeight: 'bold', color: '#3f3f3f' }}
          >
            BELT
          </Link>
          <Link
            href="/contact"
            underline="none"
            sx={{ fontWeight: 'bold', color: '#3f3f3f' }}
          >
            CONTACT
          </Link>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
