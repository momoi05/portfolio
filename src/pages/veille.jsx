import React from "react";
import "../style/style.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout";


export default function ChapitrePage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <div className="page-layout">
            <div>
              <h1>Taraschini Tessa </h1>
              <h2>Développeuse Web</h2>
            </div>

          <div className="chapitre-footer">À SUIVRE...</div>
        </div>
    </>
  );
}