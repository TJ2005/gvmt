import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutTeam.css';

const AboutTeam = () => {
  const { t } = useTranslation();

  const teamMembers = t('aboutTeam.members', { returnObjects: true });

  return (
    <div className="about-us-container main-content">
      <div className="section-heading">
        <h2>{t('footer.gramPanchayatMember')}</h2>
      </div>

      <div className="team-grid">
      <div className="top-row">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div className="member-card" key={index}>
              <img src={`/assets/images/profiles/profile${index + 1}.png`} alt={member.name} className="member-image" />
              <div className="member-info">
                <div className="member-role">{member.role}</div>
                <div className="member-name">{member.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Middle row - 5 members */}
        <div className="middle-row">
          {teamMembers.slice(2, 7).map((member, index) => (
            <div className="member-card" key={index + 2}>
              <img src={`/assets/images/profiles/profile${index + 3}.png`} alt={member.name} className="member-image" />
              <div className="member-info">
                <div className="member-role">{member.role}</div>
                <div className="member-name">{member.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - 1 member */}
        <div className="bottom-row">
          {teamMembers.slice(7).map((member, index) => (
            <div className="member-card" key={index + 7}>
              <img src={`/assets/images/profiles/profile8.jpg`} alt={member.name} className="member-image" />
              <div className="member-info">
                <div className="member-role">{member.role}</div>
                <div className="member-name">{member.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam; 