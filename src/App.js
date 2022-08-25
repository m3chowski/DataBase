import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import { CharPage } from "./pages/Characters-Page";
import { Header } from "./components/header";
import { CharacterInfoPage } from "./pages/Character-Info-Page";
import { Home } from "./pages/Home/Home";

export const App = () => {
  const { pathname } = useLocation();
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        {pathname !== "/" && <Header />}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharPage />} />
            <Route path="/characters/:category" element={<CharPage />} />
            <Route path="/character/:id" element={<CharacterInfoPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};
