import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const PokeLayout = ({ children }) => {
  return (
    <div className="bg-slate-900 h-max">
      <Hero />
      <div className="container mx-auto px-4 mt-8 md:mt-12">{children}</div>
      <Footer />
    </div>
  );
};

export default PokeLayout;
