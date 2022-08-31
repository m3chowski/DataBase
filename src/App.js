import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { CharPage } from "./pages/Characters-Page";
import { Header } from "./components/header";
import { CharacterInfoPage } from "./pages/Character-Info-Page";
import { Home } from "./pages/Home";
import { EpisodesPage } from "./pages/Episodes-Page";
import { EpisodeInfoPage } from "./pages/Episode-Info-Page/Episode-Info-Page";

export const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharPage />} />
            <Route path="/character/:name" element={<CharacterInfoPage />} />
            <Route path="/episodes" element={<EpisodesPage />} />
            <Route path="/episodes/:id" element={<EpisodeInfoPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};
