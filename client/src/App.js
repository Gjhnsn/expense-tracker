import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles/globalStyles";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
