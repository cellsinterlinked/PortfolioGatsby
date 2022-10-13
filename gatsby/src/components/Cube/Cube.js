import React from 'react';
import './Cube.css';

export default function Cube() {
  return (
    <div className="container">
      <div className="cube">
        <div className="face top" />
        <div className="face bottom" />
        <div className="face left" />
        <div className="face right" />
        <div className="face front" />
        <div className="face back" />
      </div>
    </div>
  );
}
