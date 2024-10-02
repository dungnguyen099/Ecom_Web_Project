import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Link,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 2,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          underline="none"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            sx={{
              backgroundColor: "#58c9f3",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1,
            }}
          >
            <Typography sx={{ color: "white", fontSize: 20 }}>E</Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            E-Comm
          </Typography>
        </Link>

        {/* Right Section - Profile, Cart, Search */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            marginRight: 12,
            // Adjust for mobile view
            "@media (max-width: 600px)": {
              gap: 2,
              marginRight: 2,
            },
          }}
        >
          <IconButton>
            <AccountCircleIcon />
            <Typography
              sx={{
                marginLeft: 1,
                fontWeight: "bold",
                display: { xs: "none", sm: "block" },
              }}
            >
              My profile
            </Typography>
          </IconButton>

          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <Typography
            sx={{
              fontWeight: "bold",
              marginRight: 2,
              display: { xs: "none", sm: "block" },
            }}
          >
            $0.00
          </Typography>

          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
        {/* Mobile Menu Icon - Shown only on small screens */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            mr: 2, // margin-right for spacing between the icon and logo
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link
                href="/"
                underline="none"
                sx={{ fontWeight: "bold", color: "#3f3f3f" }}
              >
                HOME
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link
                href="/bags"
                underline="none"
                sx={{ fontWeight: "bold", color: "#3f3f3f" }}
              >
                BAGS
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link
                href="/sneakers"
                underline="none"
                sx={{ fontWeight: "bold", color: "#3f3f3f" }}
              >
                SNEAKERS
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link
                href="/belt"
                underline="none"
                sx={{ fontWeight: "bold", color: "#3f3f3f" }}
              >
                BELT
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link
                href="/contact"
                underline="none"
                sx={{ fontWeight: "bold", color: "#3f3f3f" }}
              >
                CONTACT
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>

      {/* Middle Section - Logo and Nav Links (for larger screens) */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "center",
          padding: 2,
        }}
      >
        {/* Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link
            href="/"
            underline="none"
            sx={{ fontWeight: "bold", color: "#3f3f3f" }}
          >
            HOME
          </Link>
          <Link
            href="/bags"
            underline="none"
            sx={{ fontWeight: "bold", color: "#3f3f3f" }}
          >
            BAGS
          </Link>
          <Link
            href="/sneakers"
            underline="none"
            sx={{ fontWeight: "bold", color: "#3f3f3f" }}
          >
            SNEAKERS
          </Link>
          <Link
            href="/belt"
            underline="none"
            sx={{ fontWeight: "bold", color: "#3f3f3f" }}
          >
            BELT
          </Link>
          <Link
            href="/contact"
            underline="none"
            sx={{ fontWeight: "bold", color: "#3f3f3f" }}
          >
            CONTACT
          </Link>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
