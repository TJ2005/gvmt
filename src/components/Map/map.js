import React from "react";
import "./map.css";

const MAP_IMAGE_URL =
  "https://maps.googleapis.com/maps/api/staticmap?center=Palaskhed,Maharashtra,India&zoom=14&size=320x200&maptype=roadmap&markers=color:red%7Clabel:P%7CPalaskhed,Maharashtra,India&key=YOUR_API_KEY";
// Or use a static image you have: "/palaskhed-map.jpg"
const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps?q=Palaskhed,Maharashtra,444904";

export default function MapSection() {
  return (
    <div className="main-content">
    <div className="map-card">
      <div className="map-flex">
        {/* Left: Contact Info */}
        <div className="map-contact">
          <div className="map-contact-item">
            <img src="/assets/icons/map.svg" alt="" className="map-icon" />
            <span className="map-contact-text">
              ग्रामपंचायत पळसखेड नागो / नाईक, बुलढाणा, बुलढाणा - 444904, महाराष्ट्र.
            </span>
          </div>
          <div className="map-contact-item">
            <img src="/assets/icons/devices.svg" alt="" className="map-icon" />
            <span className="map-contact-text">दूरध्वनी: 1234567890</span>
          </div>
          <div className="map-contact-item">
            <img src="/assets/icons/Communication.svg" alt="" className="map-icon" />
            <a
              href="mailto:grampanchyat@gmail.com"
              className="map-contact-link"
            >
              ई-मेल: grampanchyat@gmail.com
            </a>
          </div>
        </div>

        {/* Right: Map + Button */}
        <div className="map-image-col">
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.533415915656!2d77.923311!3d20.76969725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a9fc88d2ba07%3A0x92622fee0f1c2d54!2sPalaskhed%2C%20Maharashtra%20444904!5e0!3m2!1sen!2sin!4v1745724139978!5m2!1sen!2sin" width="600" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            <img src="map-pin.svg" alt="" className="map-btn-icon" />
            गुगल मॅप वर पहा
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
