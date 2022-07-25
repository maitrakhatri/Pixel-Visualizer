import { useState, useEffect } from "react";

export function Pixel({ id, outline, showInput, pixels, setPixels }) {
  const [rgb, setrgb] = useState({
    r: 255,
    g: 255,
    b: 255
  });

  useEffect(() => {
    setPixels(() =>
      pixels.map((item) =>
        item.id === id
          ? {
              id: id,
              r: rgb.r,
              g: rgb.g,
              b: rgb.b
            }
          : { ...item }
      )
    );
  }, [rgb]);
  return (
    <div
      id={id}
      className={"pixel " + (outline ? " none" : "")}
      style={{
        backgroundColor: `rgb(${rgb.r},${rgb.g},${rgb.b})`
      }}
    >
      <div className={showInput ? " input" : " hide"}>
        R{" "}
        <input
          type="number"
          value={rgb.r}
          onChange={(e) =>
            setrgb({
              ...rgb,
              r: e.target.value
            })
          }
        />
      </div>
      <div className={showInput ? " input" : " hide"}>
        G{" "}
        <input
          type="number"
          value={rgb.g}
          onChange={(e) =>
            setrgb({
              ...rgb,
              g: e.target.value
            })
          }
        />
      </div>
      <div className={showInput ? " input" : " hide"}>
        B{" "}
        <input
          type="number"
          value={rgb.b}
          onChange={(e) =>
            setrgb({
              ...rgb,
              b: e.target.value
            })
          }
        />
      </div>
    </div>
  );
}
