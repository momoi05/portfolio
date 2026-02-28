import React from "react";
import "../Style/style.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout";
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