import React, { useRef, useState } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

const App = () => {
  const [shapes, setShapes] = useState([]);
  const [text, setText] = useState('');
  const canvasRef = useRef();

  const addShape = (shapeType) => {
    const newShape = { type: shapeType, x: Math.random() * 400, y: Math.random() * 400, width: 100, height: 100, fill: 'blue' };
    setShapes([...shapes, newShape]);
  };

  const addText = () => {
    const newText = { type: 'text', x: 10, y: 10, text: text, fontSize: 24, fill: 'black' };
    setShapes([...shapes, newText]);
    setText('');
  };

  const saveCanvas = () => {
    const json = JSON.stringify(shapes);
    console.log(json); // You can implement saving logic here (e.g., download, send to server)
  };

  return (
    <div>
      <button onClick={() => addShape('rectangle')}>Add Rectangle</button>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add Text" />
      <button onClick={addText}>Add Text</button>
      <button onClick={saveCanvas}>Save Canvas</button>

      <Stage  ref={canvasRef} style={{height:400,width:400,border:'1px solid black'}}>
        <Layer>
          {shapes.map((shape, i) =>
            shape.type === 'rectangle' ? (
              <Rect key={i} {...shape} draggable />
            ) : (
              <Text key={i} {...shape} draggable />
            )
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default App;
