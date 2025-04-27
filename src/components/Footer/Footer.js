import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import "./Footer.css";

const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="main-content">
          <Grid container spacing={4}>
            {/* Contact Information Section */}
            <Grid item xs={12} md={4} className="footer-section">
              <Box className="footer-logo">
                <img
                  src="national-emblem.svg"
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
                  <img src="map.svg" alt="Address" className="contact-icon" />
                  <span>
                    ग्रामपंचायत पळसखेडे नागो / नाईक, बुलढाणा, बुलढाणा - 444904, महाराष्ट्र.
                  </span>
                </div>
                <div className="contact-item">
                  <img src="devices.svg" alt="Phone" className="contact-icon" />
                  <span>दूरध्वनी: 1234567890</span>
                </div>
                <div className="contact-item">
                  <img src="Communication.svg" alt="Email" className="contact-icon" />
                  <span>ई-मेल: grampanchyat@gmail.com</span>
                </div>
              </div>
            </Grid>
            
            {/* Quick Links Section */}
            <Grid item xs={12} sm={6} md={4} className="footer-section">

              <ul className="footer-links">
                <li><Link href="#">मुखपृष्ठ</Link></li>
                <li><Link href="#">आमच्याबद्दल</Link></li>
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
