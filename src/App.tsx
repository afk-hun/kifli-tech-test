import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./style/theme";
import NewsLetterSection from "./sections/NewsLetterSection";
import HeroSection from "./sections/HeroSection";

const GlobalStyle = createGlobalStyle`
  button {
    font-weight: 600;
    font-size: 16px;
    }
    html {
      font-family: 'Poppins', sans-serif;
    }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeroSection />
      <NewsLetterSection />
    </ThemeProvider>
  );
}

export default App;
