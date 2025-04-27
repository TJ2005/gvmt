import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useTranslation } from 'react-i18next';
import "./Footer.css";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Container } from "@mui/material";

const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="main-content">
          <Grid container spacing={4}>
            {/* Contact Information Section */}
            <Grid item xs={12} md={4} className="footer-section">
              <Box className="footer-logo">
                <img
                  src="/assets/icons/national-emblem.svg"
                  alt="Government Emblem"
                  className="footer-emblem"
                />
                <Box className="footer-title">
                  <Typography variant="h6" component="div" className="footer-site-title">
                    ग्रामपंचायत पटसखेड नागो / नाईक
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Grampanchyat Palaskhed Nago / Naik
                  </Typography>
                </Box>
              </Box>
              <div className="footer-subtitle">
                संपर्क:
              </div>
              <div className="footer-contact-info">
                <div className="contact-item">
                  <img src="/assets/icons/map.svg" alt="पत्ता" className="contact-icon" />
                  <span>
                    ग्रामपंचायत पळसखेडे नागो / नाईक, बुलढाणा, बुलढाणा - 444904, महाराष्ट्र.
                  </span>
                </div>
                <div className="contact-item">
                  <img src="/assets/icons/devices.svg" alt="फोन" className="contact-icon" />
                  <span>फोन: 1234567890</span>
                </div>
                <div className="contact-item">
                  <img src="/assets/icons/Communication.svg" alt="ईमेल" className="contact-icon" />
                  <span>ईमेल: example@example.com</span>
                </div>
              </div>
            </Grid>
            
            {/* Quick Links Section */}
            <Grid item xs={12} sm={6} md={4} className="footer-section">
              <Typography variant="h6" className="footer-heading">
                द्रुत दुवे
              </Typography>
              <ul className="footer-links">
                <li><Link href="#">मुखपृष्ठ</Link></li>
                <li><Link component={RouterLink} to="/about">परिचय</Link></li>
                <li><Link href="#">शासकीय योजना</Link></li>
                <li><Link href="#">संपर्क</Link></li>
                <li><Link href="#">उपयुक्त लिंक</Link></li>
                <li><Link href="#">सदस्य</Link></li>
              </ul>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className="footer-section">
              <ul className="footer-links">
                <li><Link href="#">ग्रामपंचायत पळसंबे</Link></li>
                <li><Link href="#">ग्रामपंचायत सदस्य</Link></li>
                <li><Link href="#">ग्रामपंचायत दस्तऐवज</Link></li>
                <li><Link href="#">गॅलरी</Link></li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="footer-section">
                <ul className="footer-links">
                  <li><Link href="#">योजना</Link></li>
                  <li><Link href="#">लाभार्थी यादी</Link></li>
                  <li><Link href="#">फॉर्म डाउनलोड</Link></li>
                </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="footer-section">
                <ul className="footer-links">
                  <li><Link href="#">संपर्क</Link></li>
                  <li><Link href="#">उपयुक्त लिंक</Link></li>
                  <li><Link href="#">सूचना फलक / बातम्या</Link></li>
                  <li><Link href="#">आरटीआय / पारदर्शकता</Link></li>
                </ul>
            </Grid>

            {/* Connect Section */}
            <Grid item xs={12} sm={6} md={4} className="footer-section">
              <ul className="footer-links">
                <li><Link href="#">महात्मा ज्योतिबा फुले योजना</Link></li>
                <li><Link href="#">पंतप्रधान आवास योजना</Link></li>
                <li><Link href="#">पंतप्रधान किसान सम्मान निधि</Link></li>
                <li><Link href="#">पंतप्रधान फसल बीमा योजना</Link></li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-bar">
        <div className="main-content">
          <div className="copyright-content">
            <div className="copyright-left">
              <Typography variant="body2">
                © {currentYear} ग्रामपंचायत पटसखेड. सर्व हक्क राखीव.
              </Typography>
            </div>
            <div className="copyright-right">
              <Link href="#" className="footer-policy-link">गोपनीयता धोरण</Link>
              <div className="copyright-divider"></div>
              <Link href="#" className="footer-policy-link">वापरण्याच्या अटी</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
