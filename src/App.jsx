import React from "react";
import "./App.css";

import { ThemeProvider } from "./contexts/theme-provider";

import {
  Container,
  Hero,
  Navbar,
  Demo,
  WidgetShowcase,
  CTABanner,
  Footer,
} from "./components/custom/index";
import Benefits from "./components/custom/Benefits";
import Copy from "./components/custom/Copy";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Container>
        <Hero />
        <Copy />
        <Benefits />
        {/* <Demo /> */}
        <WidgetShowcase />
        <CTABanner />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
