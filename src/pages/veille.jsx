import React from "react";
import "../style/style.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout";
import SlantedGrid from "../components/SlantedGrid3";


export default function ChapitrePage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <SlantedGrid />
    </>
  );
}