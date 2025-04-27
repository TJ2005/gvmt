import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

// Font size adjuster module
const FontSizeAdjuster = () => {
  const [selected, setSelected] = useState("A");

  useEffect(() => {
    if (selected === "A-") document.documentElement.style.fontSize = "90%";
    else if (selected === "A") document.documentElement.style.fontSize = "100%";
    else if (selected === "A+") document.documentElement.style.fontSize = "110%";
  }, [selected]);

  return (
    <div className="font-size-adjuster">
      {["A-", "A", "A+"].map((size) => (
        <button
          key={size}
          className={`font-size-btn${selected === size ? " selected" : ""}`}
          onClick={() => setSelected(size)}
          aria-label={size}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [aboutAnchor, setAboutAnchor] = useState(null);
  const [otherAnchor, setOtherAnchor] = useState(null);
  const [langAnchor, setLangAnchor] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dropdown handlers
  const handleAboutOpen = (e) => setAboutAnchor(e.currentTarget);
  const handleAboutClose = () => setAboutAnchor(null);

  const handleOtherOpen = (e) => setOtherAnchor(e.currentTarget);
  const handleOtherClose = () => setOtherAnchor(null);

  const handleLangOpen = (e) => setLangAnchor(e.currentTarget);
  const handleLangClose = () => setLangAnchor(null);

  // Mobile menu handler
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      {/* Top Blue Bar */}
      <div className="top-blue-bar">
        <div className="main-content bluebar-content">
          <div className="bluebar-left">
            <img src="indian-flag.svg" alt="Indian Flag" className="flag-icon" />
            <span className="govt-text">भारत सरकार</span>
          </div>
          <div className="bluebar-right">
            <div className="bluebar-accessibility">
              <img src="accessibility.svg" alt="Accessibility" className="bluebar-icon" />
            </div>
            <div className="bluebar-divider"></div>
            <FontSizeAdjuster />
            <div className="first bluebar-divider"></div>
            <img src="regular.svg" alt="Regular" className="bluebar-icon" />
            <div className="bluebar-divider"></div>
            <Button
              className="lang-btn"
              endIcon={<ExpandMoreIcon />}
              onClick={handleLangOpen}
            >
              मराठी
            </Button>
            <Menu
              anchorEl={langAnchor}
              open={Boolean(langAnchor)}
              onClose={handleLangClose}
            >
              <MenuItem onClick={handleLangClose}>मराठी</MenuItem>
              <MenuItem onClick={handleLangClose}>English</MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <AppBar position="static" color="default" elevation={1} className="navbar-appbar">
        <div className="main-content">
          <Toolbar disableGutters className="navbar-toolbar">
            <div className="navbar-logo">
              <img
                src="national-emblem.svg"
                alt="Government Emblem"
                className="emblem"
              />
              <Box className="navbar-title">
                <Typography variant="h6" component="div" className="site-title">
                  ग्रामपंचायत पटसखेड नागो / नाईक
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Grampanchyat Palaskhed Nago / Naik
                </Typography>
              </Box>
            </div>

            {/* Desktop Navigation Links */}
            <Box className="navbar-links">
              <Button color="inherit" className="nav-link active">मुखपृष्ठ</Button>
              <Button
                color="inherit"
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleAboutOpen}
                className="nav-link"
              >
                आमच्याबद्दल
              </Button>
              <Menu
                anchorEl={aboutAnchor}
                open={Boolean(aboutAnchor)}
                onClose={handleAboutClose}
              >
                <MenuItem onClick={handleAboutClose}>परिचय</MenuItem>
                <MenuItem onClick={handleAboutClose}>सदस्य</MenuItem>
              </Menu>
              <Button
                color="inherit"
                endIcon={<KeyboardArrowDownIcon />}
                className="nav-link"
              >
                शासकीय योजना
              </Button>
              <Button color="inherit" className="nav-link">संपर्क</Button>
              <Button color="inherit" className="nav-link">उपयुक्त लिंक</Button>
              <Button
                color="inherit"
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleOtherOpen}
                className="nav-link"
              >
                इतर
              </Button>
              <Menu
                anchorEl={otherAnchor}
                open={Boolean(otherAnchor)}
                onClose={handleOtherClose}
              >
                <MenuItem onClick={handleOtherClose}>Download</MenuItem>
                <MenuItem onClick={handleOtherClose}>Feedback</MenuItem>
              </Menu>
            </Box>

            {/* Mobile Hamburger Menu and Helpline Button */}
            <div className="navbar-hamburger">
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleMobileMenu}
                className="hamburger-icon"
              >
                <MenuIcon />
              </IconButton>
              {/* Helpline button */}
              <Button variant="outlined" className="helpline-btn">
                <img src="Contact.svg" alt="Helpline" className="helpline-icon" />
                हेल्पलाईन नंबर
              </Button>
            </div>
          </Toolbar>
        </div>
      </AppBar>

      {/* Mobile Dropdown Menu */}
      <Collapse in={mobileMenuOpen} className="mobile-dropdown-menu">
        <div className="dropdown-overlay">
          <div className="main-content">
            <div className="dropdown-header">
              <div className="close-button-container">
                <IconButton onClick={toggleMobileMenu} className="close-button">
                  <CloseIcon />
                </IconButton>
              </div>
              <Typography variant="h6" className="menu-title">मेनू</Typography>
            </div>
            <div className="dropdown-grid">
              <div className="grid-column">
                <Button className="grid-item">मुखपृष्ठ</Button>
                <Button className="grid-item">आमच्याबद्दल</Button>
                <Button className="grid-item">शासकीय योजना</Button>
                <Button className="grid-item">संपर्क</Button>
                <Button className="grid-item">उपयुक्त लिंक</Button>
              </div>
              <div className="grid-column">
                <Button className="grid-item">ग्रामपंचायत सदस्य</Button>
                <Button className="grid-item">ग्रामपंचायत दस्तऐवज</Button>
                <Button className="grid-item">गॅलरी</Button>
              </div>
              <div className="grid-column">
                <Button className="grid-item">योजना</Button>
                <Button className="grid-item">लाभार्थी यादी</Button>
                <Button className="grid-item">फॉर्म डाउनलोड्स</Button>
              </div>
              <div className="grid-column">
                <Button className="grid-item">सूचना फलक / बातम्या</Button>
                <Button className="grid-item">आरटीआय / पारदर्शकता</Button>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Navbar;
