import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';
import { Typography } from '@mui/material';

const AboutUs = () => {
  const { t } = useTranslation();

  const developmentProjects = [
    {
      title: "तांडा वस्ती सुधार योजना",
      description: "सिमेंट रस्त्याचे बांधकाम व स्वच्छतागृही विकास.",
      image: "/assets/images/projects/project1.png"
    },
    {
      title: "संपूर्ण गावठाणी नळ योजना",
      description: "स्वच्छ पाणी पुरवठा व वितरण व्यवस्था.",
      image: "/assets/images/projects/project2.png"
    },
    {
      title: "शाळा व अंगणवाडी",
      description: "जिल्हा परिषद शाळा व अंगणवाडीला सौंदर्यीकरण व सुविधा.",
      image: "/assets/images/projects/project3.png"
    },
    {
      title: "मुख्य रस्त्याचे बांधकाम",
      description: "पळसखेड नागो काळापूर मुख्य गावा पर्यंत",
      image: "/assets/images/projects/project4.png"
    },
    {
      title: "ग्रामपंचायत इमारत",
      description: "ग्रामपंचायत इमारतीचे सुशोभीकरण व सुरक्षा",
      image: "/assets/images/projects/project5.png"
    },
    {
      title: "इतर विकास कामे",
      description: "मागमंद येथे बकरीचे वसतीगृह, हनुमान मंदिर मोठा योजना, फळबाग योजना",
      image: "/assets/images/projects/project6.png"
    }
  ];

  return (
    <div className="about-us-container main-content">
      {/* Introduction Section */}
      <div className="section-heading">
        <h2>आमच्याबद्दल</h2>
      </div>

      {/* Statistics */}
      <div className="stats-section">
        <div className="stat-item">
          <Typography variant="h6">गावाची लोकसंख्या : १५००</Typography>
          <Typography variant="h6">स्त्री == पुरुष ==</Typography>
          <Typography variant="h6">एकूण घरे : २००</Typography>
        </div>
      </div>

      <div className="description-section">
        <Typography>
          ग्रामपंचायत पळसखेड नागो / नाईक, तालुका पंचायत समिती बुलढाणा, जिल्हा परिषद बुलढाणा अंतर्गत येणारे एक प्रगतशील व विकासाभिमुख गाव आहे. सुमारे १५०० लोकसंख्या असलेल्या या गावात सुमारे २०० घरे असून एकूण ३ वॉर्ड आणि ७ सदस्यांची ग्रामपंचायत कार्यरत आहे.
        </Typography>
      </div>

      {/* Administration Section */}
      <div className="section-heading">
        <h2>प्रशासकीय रचना</h2>
      </div>

      <div className="admin-section">
        <div className="admin-item">
          <Typography className="admin-title">सरपंच :</Typography>
          <Typography className="admin-value">पूजा अमोल इंगळे</Typography>
        </div>
        <div className="admin-item">
          <Typography className="admin-title">उपसरपंच :</Typography>
          <Typography className="admin-value">प्रकाश रमेश राठोड</Typography>
        </div>
        <div className="admin-item">
          <Typography className="admin-title">सदस्य :</Typography>
          <Typography className="admin-value">मालती प्रवीण राठोड, बेबीताई प्रवीण राठोड, हिरामण धनसिंग पवार, शुभांगी महेश जाधव, मुकिंदा संतोष साळवे</Typography>
        </div>
        <div className="admin-item">
          <Typography className="admin-title">ग्रामपंचायत अधिकारी :</Typography>
          <Typography className="admin-value">नितीन इंगळे</Typography>
        </div>
      </div>

      {/* Development Projects Section */}
      <div className="section-heading">
        <h2>विकासकामे</h2>
      </div>

      <div className="projects-wrapper">
        <div className="projects-grid">
          {developmentProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
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
          ग्रामपंचायत पळसखेड नागो / नाईक हे गाव सर्वतोपरी प्रगत व स्वच्छ, सुंदर गाव म्हणून नावारूपास येत आहे. नागरिकांचे हित, शाश्वत विकास व पारदर्शक प्रशासन या आमच्या मुख्य जबाबदाऱ्या आहेत.
        </Typography>
      </div>
    </div>
  );
};

export default AboutUs; 