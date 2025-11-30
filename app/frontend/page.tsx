"use client";
import Hero from "@/components/ui/front/Hero";
import Navbar from "@/components/ui/front/Navbar";
import { motion } from "framer-motion";
import React from "react";

const FrontPage = () => {
  return (
    <div className="frontend overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default FrontPage;
