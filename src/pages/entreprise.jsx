import React from "react";
import "../Style/style.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout";
import SlantedGrid from "../components/SlantedGrid2";


export default function ChapitrePage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <SlantedGrid />
    </>
  );
}