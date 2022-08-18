import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/header/Header";

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
            <Route path="*" element={<Navigate to={"/"} replace />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};
