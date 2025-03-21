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

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }

    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 20px;
    }

    main {
      padding: 80px 15px 100px;
    }
  }
`;

export default GlobalStyle; 