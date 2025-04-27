import React from 'react';
import './AboutTeam.css';

const AboutTeam = () => {
  const teamMembers = [
    {
      role: "सरपंच",
      name: "पूजा अमोल इंगळे",
      image: "/assets/images/profiles/profile1.png"
    },
    {
      role: "उपसरपंच",
      name: "प्रकाश रमेश राठोड",
      image: "/assets/images/profiles/profile2.png"
    },
    {
      role: "सदस्य",
      name: "मालती प्रवीण राठोड",
      image: "/assets/images/profiles/profile3.png"
    },
    {
      role: "सदस्य",
      name: "बेबीताई प्रवीण राठोड",
      image: "/assets/images/profiles/profile4.png"
    },
    {
      role: "सदस्य",
      name: "हिरामण धनसिंग पवार",
      image: "/assets/images/profiles/profile5.png"
    },
    {
      role: "सदस्य",
      name: "शुभांगी महेश जाधव",
      image: "/assets/images/profiles/profile6.png"
    },
    {
      role: "सदस्य",
      name: "मुकिंदा संतोष साळवे",
      image: "/assets/images/profiles/profile7.png"
    },
    {
      role: "ग्रामपंचायत अधिकारी",
      name: "नितीन इंगळे",
      image: "/assets/images/profiles/profile8.png"
    }
  ];

  return (
    <div className="about-us-container main-content">
      <div className="section-heading">
        <h2>ग्रामपंचायत सदस्य</h2>
      </div>

      <div className="team-grid">
        {/* Top row - 2 members */}
        <div className="top-row">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div className="member-card" key={index}>
              <img src={member.image} alt={member.name} className="member-image" />
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
              <img src={member.image} alt={member.name} className="member-image" />
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
              <img src={member.image} alt={member.name} className="member-image" />
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