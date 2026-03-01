import React from "react";
import "../style/style.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout";
import Image from "../images/chibi-tetsuya-kuroko-coloring.png"
import ParcoursTimeline from "../components/parcoursTimeline";
import SlantedGrid from "../components/SlantedGrid";



export default function ChapitrePage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <SlantedGrid />
    </>
  );
}