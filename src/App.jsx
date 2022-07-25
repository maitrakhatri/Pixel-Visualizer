import "./styles.css";
import { Pixel } from "./Pixel";
import { useState } from "react";

export default function App() {
  const [outline, setOutline] = useState(false);
  const [showInput, setShowInput] = useState(true);

  const [pixels, setPixels] = useState([
    {
      id: 0,
      r: 255,
      g: 255,
      b: 255
    },
    {
      id: 1,
      r: 255,
      g: 255,
      b: 255
    },
    {
      id: 2,
      r: 255,
      g: 255,
      b: 255
    },
    {
      id: 3,
      r: 255,
      g: 255,
      b: 255
    },
    {
      id: 4,
      r: 255,
      g: 255,
      b: 255
    },
    {
      id: 5,
      r: 255,
      g: 255,
      b: 255
    },
    {
      id: 6,
      r: 255,
      g: 255,
      b: 255
    },
    {
      id: 7,
      r: 255,
      g: 255,
      b: 255
    },
    {
      id: 8,
      r: 255,
      g: 255,
      b: 255
    }
  ]);
  return (
    <div className="App">
      <h1>Pixel Visual Representation</h1>
      <h3>
        Made with ❤️ by{" "}
        <a
          href="https://github.com/maitrakhatri"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Maitra Khatri
        </a>{" "}
        <br /> <br />
        <a
          href="https://github.com/maitrakhatri/Pixel-Visualizer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Souce Code ↗️
        </a>
      </h3>
      <div className="buttons">
        <button onClick={() => setOutline((outline) => !outline)}>
          Toggle Outline
        </button>
        <button onClick={() => setShowInput((showInput) => !showInput)}>
          Toggle Pixel
        </button>
      </div>

      <div id="main">
        <main>
          {pixels.map((item) => {
            return (
              <Pixel
                id={item.id}
                outline={outline}
                showInput={showInput}
                pixels={pixels}
                setPixels={setPixels}
              />
            );
          })}
        </main>

        <div className="matrix">
          <p>3 Matrix will be bunched together and saved with values:</p>
          <div className="red">
            <p>
              <b>RED Channel</b>
            </p>
            <table>
              <tr>
                <th>{pixels[0].r}</th>
                <th>{pixels[1].r}</th>
                <th>{pixels[2].r}</th>
              </tr>
              <tr>
                <th>{pixels[3].r}</th>
                <th>{pixels[4].r}</th>
                <th>{pixels[5].r}</th>
              </tr>
              <tr>
                <th>{pixels[6].r}</th>
                <th>{pixels[7].r}</th>
                <th>{pixels[8].r}</th>
              </tr>
            </table>
          </div>
          <div className="green">
            <p>
              <b>GREEN Channel</b>
            </p>
            <table>
              <tr>
                <th>{pixels[0].g}</th>
                <th>{pixels[1].g}</th>
                <th>{pixels[2].g}</th>
              </tr>
              <tr>
                <th>{pixels[3].g}</th>
                <th>{pixels[4].g}</th>
                <th>{pixels[5].g}</th>
              </tr>
              <tr>
                <th>{pixels[6].g}</th>
                <th>{pixels[7].g}</th>
                <th>{pixels[8].g}</th>
              </tr>
            </table>
          </div>
          <div className="blue">
            <p>
              <b>BLUE Channel</b>
            </p>
            <table>
              <tr>
                <th>{pixels[0].b}</th>
                <th>{pixels[1].b}</th>
                <th>{pixels[2].b}</th>
              </tr>
              <tr>
                <th>{pixels[3].b}</th>
                <th>{pixels[4].b}</th>
                <th>{pixels[5].b}</th>
              </tr>
              <tr>
                <th>{pixels[6].b}</th>
                <th>{pixels[7].b}</th>
                <th>{pixels[8].b}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
