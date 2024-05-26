import { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateHexColor() {
    //#908908

    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(()=>{
    if(typeOfColor==="rgb") handleCreateRgbColor();
    else handleCreateHexColor()
  },[typeOfColor])
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button
        onClick={() => setTypeOfColor("hex")}
        style={{
          background: "white",
          margin: "10px",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        Create Hex Color
      </button>
      <button
        onClick={() => setTypeOfColor("rgb")}
        style={{
          background: "white",
          margin: "10px",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        Create RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor
        }
        style={{
          background: "white",
          margin: "10px",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent:"center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection:"column",
          gap:"10px"
        }}
      >
        <h3>{typeOfColor==='rgb'? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
