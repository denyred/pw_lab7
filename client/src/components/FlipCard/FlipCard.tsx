import React, { useState } from "react";
import "./index.scss";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  isFlipped: boolean;
  onChanging: (isFlipped: boolean) => void;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  frontContent,
  backContent,
  isFlipped,
}) => {
  return (
    <div className="flip-card">
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">{frontContent}</div>
        <div className="flip-card-back">{backContent}</div>
      </div>
    </div>
  );
};
