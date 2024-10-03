import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import * as fabric from 'fabric';
import templates from './service/templatesJson';
// const fabric = require('fabric').fabric;

function App() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    // Initialize the fabric.js canvas
    const initCanvas = new fabric.Canvas(canvasRef.current);
    setCanvas(initCanvas);

    return () => {
      initCanvas.dispose(); // Clean up on unmount
    };
  }, []);

  

  const loadCanvasFromJson = () => {
    console.log(canvas);
    if (canvas) {
      canvas.loadFromJSON(templates[0], () => {
        canvas.renderAll(); // Re-render after loading JSON
      });
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} width={500} height={500} style={{ border: '1px solid black' }} />
      <button onClick={loadCanvasFromJson}>Load JSON</button>
    </div>
  );
}

export default App;
