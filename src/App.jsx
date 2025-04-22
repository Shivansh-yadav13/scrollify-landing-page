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

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Container>
        <Hero />
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
