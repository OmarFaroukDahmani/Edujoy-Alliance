import fb_icon from '../assets/facebook.svg';
import '../style/footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://www.facebook.com/profile.php?id=61550578007610"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fb_icon} alt="Facebook" className="footer-icon" />
        </a>
        <p className="footer-text">&copy; 2025 EduJoy. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
}
