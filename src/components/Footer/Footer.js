import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();


  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="main-content">
          <Grid container spacing={4}>
            {/* Contact Information Section */}
            <Grid item xs={12} md={3} className="footer-section">
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
                  <Typography variant="caption" color="text.secondary" className="site-subtitle">
                    Grampanchyat Palaskhed Nago / Naik
                  </Typography>
                </Box>
              </div>
              <Typography variant="h6" className="contact-heading bar">
              {t('footer.contact')}
              </Typography>
              <div className="contact-item">
                <img src="/assets/icons/Map.svg" alt="पत्ता" className="contact-icon" />
                <span>
                {t('footer.villageAddress')} -<strong>444904</strong>, {t('footer.state')}.
                </span>
              </div>
              <div className="contact-item">
                <img src="/assets/icons/Devices.svg" alt="फोन" className="contact-icon" />
                <span>{t('footer.telephone')} : <strong>1234567890</strong></span>
              </div>
              <div className="contact-item">
                <img src="/assets/icons/Communication.svg" alt="ईमेल" className="contact-icon" />
                <span>{t('footer.email')} <a href="mailto:grampanchyat@gmail.com" className="email-link">grampanchyat@gmail.com</a></span>
              </div>
            </Grid>

            {/* All Links Section */}
            <Grid item xs={12} md={9} className="footer-links-container">
              <Grid container spacing={4}>
                {/* Quick Links */}
                <Grid item xs={12} sm={6} md={3} className="footer-section">
                  <ul className="footer-links">
                    <li><Link component={RouterLink} to="/">{t('footer.home')}</Link></li>
                    <li><Link component={RouterLink} to="/about">{t('footer.aboutUs')}</Link></li>
                    <li><Link component={RouterLink} to="/schemes">{t('navbar.governmentSchemes')}</Link></li>
                    <li><Link component={RouterLink} to="/contact">{t('navbar.contact')}</Link></li>
                    <li><Link component={RouterLink} to="/useful-links">{t('footer.usefulLinks')}</Link></li>
                  </ul>
                </Grid>

                {/* Grampanchayat Links */}
                <Grid item xs={12} sm={6} md={3} className="footer-section">
                  <ul className="footer-links">
                    <li><Link component={RouterLink} to="/grampanchayat">{t('navbar.gramPanchayat')}</Link></li>
                    <li><Link component={RouterLink} to="/about-village">{t('navbar.aboutVillage')}</Link></li>
                    <li><Link component={RouterLink} to="/members">{t('footer.gramPanchayatMember')}</Link></li>
                    <li><Link component={RouterLink} to="/documents">{t('navbar.documents')}</Link></li>
                    <li><Link component={RouterLink} to="/gallery">{t('footer.gallery')}</Link></li>
                  </ul>
                </Grid>

                {/* Schemes Links */}
                <Grid item xs={12} sm={6} md={3} className="footer-section">
                  <ul className="footer-links">
                    <li><Link component={RouterLink} to="/schemes">{t('navbar.schemes')}</Link></li>
                    <li><Link component={RouterLink} to="/beneficiaries">{t('navbar.beneficiaries')}</Link></li>
                    <li><Link component={RouterLink} to="/downloads">{t('navbar.downloads')}</Link></li>
                  </ul>
                </Grid>

                {/* Info Links */}
                <Grid item xs={12} sm={6} md={3} className="footer-section">
                  <ul className="footer-links">
                    <li><Link component={RouterLink} to="/contact">{t('navbar.contact')}</Link></li>
                    <li><Link component={RouterLink} to="/useful-links">{t('footer.usefulLinks')}</Link></li>
                    <li><Link component={RouterLink} to="/notices">{t('navbar.notices')}</Link></li>
                    <li><Link component={RouterLink} to="/rti">{t('navbar.rti')}</Link></li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Mobile Links - Only visible on mobile */}
      <div className="mobile-footer-links">
        <div>
          <div className="links-group">
            {/* First Column */}
            <ul className="mobile-links">
              <li><Link component={RouterLink} to="/">{t('navbar.home')}</Link></li>
              <li><Link component={RouterLink} to="/about">{t('navbar.about')}</Link></li>
              <li><Link component={RouterLink} to="/schemes">{t('navbar.governmentSchemes')}</Link></li>
              <li><Link component={RouterLink} to="/contact">{t('navbar.contact')}</Link></li>
              <li><Link component={RouterLink} to="/useful-links">{t('navbar.usefulLinks')}</Link></li>
            </ul>

            {/* Second Column */}
            <ul className="mobile-links">
              <li><Link component={RouterLink} to="/grampanchayat">{t('navbar.gramPanchayat')}</Link></li>
              <li><Link component={RouterLink} to="/about-village">{t('navbar.aboutVillage')}</Link></li>
              <li><Link component={RouterLink} to="/members">{t('footer.gramPanchayatMember')}</Link></li>
              <li><Link component={RouterLink} to="/documents">{t('navbar.documents')}</Link></li>
              <li><Link component={RouterLink} to="/gallery">{t('navbar.gallery')}</Link></li>
            </ul>

            {/* Third Column */}
            <ul className="mobile-links">
              <li><Link component={RouterLink} to="/schemes">{t('navbar.schemes')}</Link></li>
              <li><Link component={RouterLink} to="/beneficiaries">{t('navbar.beneficiaries')}</Link></li>
              <li><Link component={RouterLink} to="/downloads">{t('navbar.downloads')}</Link></li>
            </ul>

            {/* Fourth Column */}
            <ul className="mobile-links">
              <li><Link component={RouterLink} to="/contact">{t('navbar.contact')}</Link></li>
              <li><Link component={RouterLink} to="/useful-links">{t('footer.usefulLinks')}</Link></li>
              <li><Link component={RouterLink} to="/notices">{t('navbar.notices')}</Link></li> 
              <li><Link component={RouterLink} to="/rti">{t('navbar.rti')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
        </div>
      </div>

      

      {/* Copyright Bar */}
      <div className="copyright-bar">
        <div className="main-content">
          <div className="copyright-content">
            <div className="copyright-left">
              <Typography variant="body2">
                ©2025 {t('footer.copyright')}
              </Typography>
            </div>
            <div className="copyright-right">
              <Link href="#" className="footer-policy-link">{t('footer.termsAndConditions')}</Link>
              <div className="copyright-divider"></div>
              <Link href="#" className="footer-policy-link">{t('footer.privacyPolicy')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
