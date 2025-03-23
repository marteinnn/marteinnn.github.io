import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=TeX+Gyre+Heros:wght@300;400;500;600;700&display=swap');

  :root {
    --primary-color: #333;
    --secondary-color: #d9d8d8;
    --accent-color: #000000;
    --background-color: #ffffff;
    --text-color: #333;
    --text-light: #727272;
    --border-color: #404040;
    --hover-color: #f5f5f5;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'TeX Gyre Heros', 'TH', Roboto, Noto Sans KR, sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    margin: 0;
    padding: 0;
    text-align: center;
    letter-spacing: 0.5px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 100px 20px 120px;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
  }

  .content {
    flex: 1;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  h1 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--primary-color);
    letter-spacing: -0.5px;
    line-height: 1.1;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--primary-color);
  }

  p {
    color: var(--text-light);
    margin-bottom: 1rem;
    font-size: 18px;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: var(--text-light);
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      color: var(--accent-color);
    }
  }

  /* Tablet Styles */
  @media (max-width: 1024px) {
    main {
      padding: 80px 15px 100px;
    }

    .content {
      max-width: 90%;
    }

    h1 {
      font-size: 42px;
    }

    h2 {
      font-size: 22px;
    }

    p {
      font-size: 16px;
    }
  }

  /* Mobile Styles */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }

    main {
      padding: 60px 10px 80px;
    }

    .content {
      max-width: 100%;
      padding: 0 15px;
    }

    h1 {
      font-size: 32px;
      margin-bottom: 15px;
    }

    h2 {
      font-size: 20px;
      margin-bottom: 15px;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 0.8rem;
    }

    a {
      font-size: 14px;
    }

    /* Header and Navigation */
    header {
      padding: 15px;
      margin-top: 40px;
    }

    header .logo-img {
      height: 80px;
    }

    nav ul li a {
      font-size: 18px;
      margin-left: 20px;
    }

    /* Container and Grid Layouts */
    .container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
    }

    .about-me, .skills, .socials {
      width: 100%;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 15px;
    }

    /* Profile Photo */
    .profile-photo {
      width: 160px;
      height: 160px;
    }

    /* Description */
    .description {
      font-size: 16px;
      padding: 0 20px;
      max-width: 100%;
    }

    /* Schools Section */
    .schools {
      flex-direction: column;
      gap: 20px;
      padding: 20px;
      width: 100%;
    }

    .school {
      width: 100%;
      height: auto;
      min-height: 200px;
      margin-bottom: 20px;
    }

    /* Skills and Socials */
    .skills-container, .socials-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 20px;
      width: 100%;
    }

    .skill-tag, .social-link {
      padding: 12px;
      font-size: 14px;
      width: 100%;
      text-align: center;
    }

    /* Song of the Day */
    .song-of-the-day {
      padding: 8px;
      font-size: 10px;
      width: 100%;
    }

    .song-header {
      font-size: 14px;
    }

    .song-details iframe {
      height: 60px;
      width: 100%;
    }

    /* Footer */
    footer {
      padding: 8px 0;
      width: 100%;
    }
  }

  /* Small Mobile Styles */
  @media (max-width: 480px) {
    body {
      font-size: 13px;
    }

    main {
      padding: 40px 8px 60px;
    }

    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }

    a {
      font-size: 13px;
    }

    /* Further reduce spacing for very small screens */
    section {
      margin-bottom: 20px;
    }

    .container {
      padding: 0 10px;
      gap: 15px;
    }


    /* Header adjustments for very small screens */
    header .logo-img {
      height: 60px;
    }

    nav ul li a {
      font-size: 16px;
      margin-left: 10px;
    }

    /* School cards for very small screens */
    .school {
      padding: 15px;
    }

    .school-logo {
      width: 120px;
    }

    /* Skills and socials for very small screens */
    .skill-tag, .social-link {
      padding: 10px;
      font-size: 13px;
    }
  }
`;

export default GlobalStyle; 