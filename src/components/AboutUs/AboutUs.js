import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';
import { Typography } from '@mui/material';

const AboutUs = () => {
  const { t } = useTranslation();

  const developmentProjects = t('aboutUs.development.projects', { returnObjects: true });

  return (
    <div className="about-us-container main-content">
      {/* Introduction Section */}
      <div className="section-heading">
        <h2>{t('about.title')}</h2>
      </div>

      {/* Statistics */}
      <div className="stats-section">
        <div className="stat-item">
          <Typography variant="h6">
            <span>{t('about.villagePopulation')}</span> : {t('about.population.value')}
          </Typography>
          <Typography variant="h6">
            <span>{t('about.cat.male')}</span> : {t('about.cat.maleValue')}
          </Typography>
          <Typography variant="h6">
            <span> {t('about.cat.female')}</span> :  {t('about.cat.femaleValue')}
          </Typography>
          <Typography variant="h6">
            <span>{t('about.households.total')}</span> : {t('about.households.value')}
          </Typography>
        </div>
      </div>

      <div className="description-section">
      {t('about.description')}
      </div>

      {/* Administration Section */}
      <div className="section-heading">
        <h2>{t('about.administration.title')}</h2>
      </div>

      <div className="admin-section">
        <div className="admin-item">
          <Typography className="admin-title">{t('about.administration.sarpanch')} :</Typography>
          <Typography className="admin-value">{t('about.administration.sarpanchName')}</Typography>
        </div>
        <div className="admin-item">
          <Typography className="admin-title">{t('aboutUs.administration.deputySarpanch')} :</Typography>
          <Typography className="admin-value">{t('aboutUs.administration.deputySarpanchName')}</Typography>
        </div>
        <div className="admin-item">
          <Typography className="admin-title">{t('navbar.members')} :</Typography>
          <Typography className="admin-value">{t('navbar.membersName')}</Typography>
        </div>
        <div className="admin-item">
          <Typography className="admin-title">{t('aboutUs.administration.gramPanchayatOfficer')} :</Typography>
          <Typography className="admin-value">{t('aboutUs.administration.gramPanchayatOfficerName')}</Typography>
        </div>
      </div>

      {/* Development Projects Section */}
      <div className="section-heading">
        <h2>{t('aboutUs.development.title')}</h2>
      </div>

      <div className="projects-wrapper">
        <div className="projects-grid">
          {developmentProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={`/assets/images/projects/project${index + 1}.png`} alt={project.title} className="project-image" />
              <div className="project-content">
                <div className="project-title">{project.title}</div>
                <div className="project-description">{project.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note Section */}
      <div className="note-section">
        <Typography className="note-text">
          {t('aboutUs.development.tagLine')}
        </Typography>
      </div>
    </div>
  );
};

export default AboutUs; 