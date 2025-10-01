import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../../public/logo.png";
import linkedin from "../assets/inkedin_icon.svg";
import omar from "../assets/omar.jpg";
import assil from "../assets/assil.jpeg";
import heni from "../assets/heni.jpeg";
import fahmi from "../assets/fahmi.jpg";

import "../style/home.css";
import { MarqueeDemo } from "../components/Marquee";

export default function Home() {
  const teamMembers = [
        {
          img: omar,
          alt: "Omar",
          name: "Omar Farouk Dahmani",
          position: "President",
          quote: "If you want it, just get it.",
        },
        {
          img: assil,
          alt: "Assil",
          name: "Assil Ben Kamel",
          position: "Vice-President",
          quote: "Yes we can.",
        },
        {
          img: fahmi,
          alt: "Fahmi",
          name: "Fahmi Zarrougi",
          position: "Founder",
          quote: "Think, Treat then do.",
        },
        {
          img: heni,
          alt: "Heni",
          name: "Heni Bahrouni",
          position: "Communications Manager",
          quote:
            "The future belongs to those who believe in the beauty of their dreams.",
        },
      ]
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <main className="main">
        <div className="home_content">
          <h1>EduJoy-AIIiance IsetKr Club</h1>
          <p>Learn with Joy, Grow with Passion!</p>
          <button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8oh-Rrp2yMTvM0Qd-7DOTC9smsETGHiQ9XTbJYnFXFdOYdw/viewform?usp=sharing&ouid=113283860763713289600"
              target="_blank"
              rel="noreferrer"
            >
              Register Now
            </a>
          </button>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="about_content">
        <h1 className="title">About Us</h1>
        <div className="about parent">
          <img className="div1" src={logo} alt="EduJoy logo" />
          <div className="about_text">
            <h2 className="div2">About EduJoy-AIIiance IsetKr Club.</h2>
            <p className="div3">
              Join the EduJoy-AIIiance IsetKr Club, a tech community at the{" "}
              <span>Higher Institute of Technological Studies of Kairouan</span>
              . Founded in <span>2024</span>, we help you develop practical tech
              skills for the professional world. Learn from{" "}
              <span>workshops</span>, and <span>training</span> in various tech
              domains. <span>Earn certificates</span> and join our board team.
              Follow us on our website and social media.{" "}
              <span id="club_name">EduJoy-AIIiance IsetKr Club:</span>{" "}
              <span>Smile, learn, grow.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
<section id="team" className="team">
    <p className="title team-head-text">Our Team</p>
    <div className="responsive-container-block">
{teamMembers.map((member, i) => (
        <div key={i} className="responsive-cell-block card-container">
          <div className="card">
            <div className="team-image-wrapper">
              <img className="team-member-image" src={member.img} alt={member.alt} />
            </div>
            <p className="name">{member.name}</p>
            <p className="position">{member.position}</p>
            <p className="feature-text">{member.quote}</p>
          </div>
        </div>
      ))}
    </div>
</section>
  
      
      <section id="events" className="our-events">
        <h1 className="title">Our Events</h1>
        <p>We create the best events!</p>
        <MarqueeDemo />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact_content">
        <h1 className="title">Reach Us</h1>
        <p>Stay in touch with us!</p>
        <div className="contact">
          <div className="contact_info">
            <h2>Via Email</h2>
            <p>Service.EduJoy@gmail.com</p>
          </div>
          <div className="contact_phone">
            <h2>Or Call Us</h2>
            <p>+216 21 419 558</p>
          </div>
        </div>
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.697501908022!2d10.0634719!3d35.597376499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fdd10059dab277%3A0x318bc455dc73671b!2sclub%20Edujoy-alliance!5e1!3m2!1sen!2stn!4v1749136221414!5m2!1sen!2stn"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="EduJoy on map"
        ></iframe>
      </section>

      <Footer />
    </>
  );
}
