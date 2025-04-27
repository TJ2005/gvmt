import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import { useTranslation } from "react-i18next";

// Font size adjuster module
const FontSizeAdjuster = () => {
  const [selected, setSelected] = useState(() => {
    // Get stored preference or default to "A"
    return localStorage.getItem("fontSizePreference") || "A";
  });

  useEffect(() => {
    // Store preference
    localStorage.setItem("fontSizePreference", selected);

    // Apply font size changes
    if (selected === "A-") {
      document.body.style.fontSize = "90%";
      document.body.classList.remove("font-size-normal", "font-size-large");
      document.body.classList.add("font-size-small");
    } else if (selected === "A") {
      document.body.style.fontSize = "100%";
      document.body.classList.remove("font-size-small", "font-size-large");
      document.body.classList.add("font-size-normal");
    } else if (selected === "A+") {
      document.body.style.fontSize = "110%";
      document.body.classList.remove("font-size-small", "font-size-normal");
      document.body.classList.add("font-size-large");
    }
  }, [selected]);

  return (
    <div className="font-size-adjuster">
      {["A-", "A", "A+"].map((size) => (
        <button
          key={size}
          className={`font-size-btn${selected === size ? " selected" : ""}`}
          onClick={() => setSelected(size)}
          aria-label={`Set font size to ${size === "A-" ? "small" : size === "A" ? "normal" : "large"}`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [gramPanchayatAnchor, setGramPanchayatAnchor] = useState(null);
  const [schemesAnchor, setSchemesAnchor] = useState(null);
  const [infoAnchor, setInfoAnchor] = useState(null);
  const [langAnchor, setLangAnchor] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Language change handler
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLangAnchor(null);
  };

  // Dropdown handlers
  const handleGramPanchayatOpen = (e) => setGramPanchayatAnchor(e.currentTarget);
  const handleGramPanchayatClose = () => setGramPanchayatAnchor(null);

  const handleSchemesOpen = (e) => setSchemesAnchor(e.currentTarget);
  const handleSchemesClose = () => setSchemesAnchor(null);

  const handleInfoOpen = (e) => setInfoAnchor(e.currentTarget);
  const handleInfoClose = () => setInfoAnchor(null);

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
            <img src="/assets/icons/indian-flag.svg" alt={t('navbar.indianFlag')} className="flag-icon" />
            <span className="govt-text">{t('navbar.govtOfIndia')}</span>
          </div>
          <div className="bluebar-right">
            <div className="bluebar-accessibility">
              <img src="/assets/icons/accessibility.svg" alt={t('navbar.accessibility')} className="bluebar-icon" />
            </div>
            <div className="bluebar-divider"></div>
            <FontSizeAdjuster />
            <div className="first bluebar-divider"></div>
            <img src="/assets/icons/Regular.svg" alt={t('navbar.regular')} className="bluebar-icon" />
            <div className="bluebar-divider"></div>
            <Button
              className="lang-btn"
              endIcon={<ExpandMoreIcon />}
              onClick={handleLangOpen}
            >
              {i18n.language === 'mr' ? 'मराठी' : 'English'}
            </Button>
            <Menu
              anchorEl={langAnchor}
              open={Boolean(langAnchor)}
              onClose={handleLangClose}
            >
              <MenuItem onClick={() => handleLanguageChange('mr')}>मराठी</MenuItem>
              <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
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
                src="/assets/icons/national-emblem.svg"
                alt="Government Emblem"
                className="emblem"
              />
              <Box className="navbar-title">
                <Typography variant="h6" component="div" className="site-title">
                  {t('navbar.gramPanchayat')} {t('navbar.palaskhedNago')}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Grampanchyat Palaskhed Nago / Naik
                </Typography>
              </Box>
            </div>

            {/* Desktop Navigation Links */}
            <Box className="navbar-links">
              <Button component={Link} to="/" color="inherit" className="nav-link">
                {t('navbar.home')}
              </Button>

              <Button component={Link} to="/about" color="inherit" className="nav-link">
                {t('navbar.about')}
              </Button>

              <Button
                color="inherit"
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleGramPanchayatOpen}
                className="nav-link"
              >
                {t('navbar.gramPanchayat')}
              </Button>
              <Menu
                anchorEl={gramPanchayatAnchor}
                open={Boolean(gramPanchayatAnchor)}
                onClose={handleGramPanchayatClose}
              >
                <MenuItem component={Link} to="/grampanchayat" onClick={handleGramPanchayatClose}>
                  {t('navbar.gramPanchayat')}
                </MenuItem>
                <MenuItem component={Link} to="/about-village" onClick={handleGramPanchayatClose}>
                  {t('navbar.aboutVillage')}
                </MenuItem>
                <MenuItem component={Link} to="/members" onClick={handleGramPanchayatClose}>
                  {t('navbar.members')}
                </MenuItem>
                <MenuItem component={Link} to="/documents" onClick={handleGramPanchayatClose}>
                  {t('navbar.documents')}
                </MenuItem>
                <MenuItem component={Link} to="/gallery" onClick={handleGramPanchayatClose}>
                  {t('navbar.gallery')}
                </MenuItem>
              </Menu>

              <Button
                color="inherit"
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleSchemesOpen}
                className="nav-link"
              >
                {t('navbar.schemes')}
              </Button>
              <Menu
                anchorEl={schemesAnchor}
                open={Boolean(schemesAnchor)}
                onClose={handleSchemesClose}
              >
                <MenuItem component={Link} to="/schemes" onClick={handleSchemesClose}>
                  {t('navbar.schemes')}
                </MenuItem>
                <MenuItem component={Link} to="/beneficiaries" onClick={handleSchemesClose}>
                  {t('navbar.beneficiaries')}
                </MenuItem>
                <MenuItem component={Link} to="/downloads" onClick={handleSchemesClose}>
                  {t('navbar.downloads')}
                </MenuItem>
              </Menu>

              <Button
                color="inherit"
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleInfoOpen}
                className="nav-link"
              >
                {t('navbar.other')}
              </Button>
              <Menu
                anchorEl={infoAnchor}
                open={Boolean(infoAnchor)}
                onClose={handleInfoClose}
              >
                <MenuItem component={Link} to="/contact" onClick={handleInfoClose}>
                  {t('navbar.contact')}
                </MenuItem>
                <MenuItem component={Link} to="/useful-links" onClick={handleInfoClose}>
                  {t('navbar.usefulLinks')}
                </MenuItem>
                <MenuItem component={Link} to="/notices" onClick={handleInfoClose}>
                  {t('navbar.notices')}
                </MenuItem>
                <MenuItem component={Link} to="/rti" onClick={handleInfoClose}>
                  {t('navbar.rti')}
                </MenuItem>
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
              <Button variant="outlined" className="helpline-btn">
                <img src="/assets/icons/Contact.svg" alt={t('navbar.helpline')} className="helpline-icon" />
                {t('navbar.helpline')}
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
              <Typography variant="h6" className="menu-title">
                {t('navbar.menu')}
              </Typography>
            </div>
            <div className="mobile-links-container">
              <div className="links-group">
                {/* First Column */}
                <ul className="mobile-links">
                  <li><Button component={Link} to="/" onClick={toggleMobileMenu}>{t('navbar.home')}</Button></li>
                  <li><Button component={Link} to="/about" onClick={toggleMobileMenu}>{t('navbar.about')}</Button></li>
                  <li><Button component={Link} to="/schemes" onClick={toggleMobileMenu}>{t('navbar.governmentSchemes')}</Button></li>
                  <li><Button component={Link} to="/contact" onClick={toggleMobileMenu}>{t('navbar.contact')}</Button></li>
                  <li><Button component={Link} to="/useful-links" onClick={toggleMobileMenu}>{t('navbar.usefulLinks')}</Button></li>
                </ul>

                {/* Second Column */}
                <ul className="mobile-links">
                  <li><Button component={Link} to="/grampanchayat" onClick={toggleMobileMenu}>{t('navbar.gramPanchayat')}</Button></li>
                  <li><Button component={Link} to="/about-village" onClick={toggleMobileMenu}>{t('navbar.aboutVillage')}</Button></li>
                  <li><Button component={Link} to="/members" onClick={toggleMobileMenu}>{t('navbar.members')}</Button></li>
                  <li><Button component={Link} to="/documents" onClick={toggleMobileMenu}>{t('navbar.documents')}</Button></li>
                  <li><Button component={Link} to="/gallery" onClick={toggleMobileMenu}>{t('navbar.gallery')}</Button></li>
                </ul>

                {/* Third Column */}
                <ul className="mobile-links">
                  <li><Button component={Link} to="/schemes" onClick={toggleMobileMenu}>{t('navbar.schemes')}</Button></li>
                  <li><Button component={Link} to="/beneficiaries" onClick={toggleMobileMenu}>{t('navbar.beneficiaries')}</Button></li>
                  <li><Button component={Link} to="/downloads" onClick={toggleMobileMenu}>{t('navbar.downloads')}</Button></li>
                </ul>

                {/* Fourth Column */}
                <ul className="mobile-links">
                  <li><Button component={Link} to="/contact" onClick={toggleMobileMenu}>{t('navbar.contact')}</Button></li>
                  <li><Button component={Link} to="/useful-links" onClick={toggleMobileMenu}>{t('navbar.usefulLinks')}</Button></li>
                  <li><Button component={Link} to="/notices" onClick={toggleMobileMenu}>{t('navbar.notices')}</Button></li>
                  <li><Button component={Link} to="/rti" onClick={toggleMobileMenu}>{t('navbar.rti')}</Button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Navbar;
