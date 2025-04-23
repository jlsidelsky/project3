import "./App.css";

import ButtonGroup from "./components/Buttons/ButtonGroup";
import Next from "./assets/next.png";
import Prev from "./assets/prev.png";

import Magnifier from "./components/Magnifier/Magnifier";
import { useEffect, useState } from "react";
import { Info } from "./components/Info/Info";
import { InfoProps } from "./components/Info/Info";

interface imgProps {
  rgb: string;
  cmyk: string;
  none: string;
}

const MAX_ZOOM = 1;
const MIN_ZOOM = 7.5;

interface pageProps {
  info: InfoProps;
  imgs: imgProps | string;
}

const pages: pageProps[] = [
  {
    info: {
      title: "How We Mix Color ",
      artist: "Additive vs Subtractive",
      children: (
        <>
          {" "}
          <p>
            Color can be created in two different ways: additive and subtractive
            mixing.
          </p>
          <p>
            <span className="bold">Additive color</span> is used in digital
            screens. It combines{" "}
            <span className="bold">Red, Green, and Blue (RGB)</span> light. When
            all three colors of light are combined at full intensity, they
            create white light. The more light added, the brighter the color.
          </p>
          <p>
            <span className="bold">Subtractive color</span> is used in printing.
            It relies on{" "}
            <span className="bold">
              Cyan, Magenta, Yellow, and Black (CMYK)
            </span>{" "}
            inks. Inks absorb (subtract) certain wavelengths of light, and
            what’s left is what we see. The more ink added, the darker the color
            appears.
          </p>
          <p>
            This difference explains why colors can look different on screens
            versus printed materials — screens emit light, while printed
            surfaces reflect it.
          </p>
        </>
      ),
    },
    imgs: "/colors.png",
  },
  {
    info: {
      title: "Additive Color in Digital Contexts",
      artist: "RGB Subpixels",
      children: (
        <>
          <p>
            Digital displays, like phone and computer screens, use{" "}
            <span className="bold">additive color.</span> Each image is made up
            of tiny units called pixels, and each pixel contains{" "}
            <span className="bold">Red, Green, and Blue subpixels.</span> By
            adjusting the brightness of these subpixels, millions of different
            colors can be created.
          </p>
          <p>
            When you look closely at a screen, you can see the{" "}
            <span className="bold">RGB pattern</span> of subpixels. These colors
            don’t physically blend — instead, because the subpixels are so small
            and close together, your brain mixes them into smooth, continuous
            colors. This effect, called{" "}
            <span className="bold">optical mixing,</span> creates the vibrant
            and luminous images we associate with digital media. The system
            relies on emitting light directly into your eyes to create color.
          </p>
        </>
      ),
    },
    imgs: "/digital.jpg",
  },
  {
    info: {
      title: "Subtractive Color in Print Contexts",
      artist: "CMYK Halftones",
      children: (
        <>
          <p>
            Printed images use <span className="bold">subtractive color</span>.
            Instead of emitting light, they rely on ink to absorb certain colors
            of light and reflect others. Most printed images are created using{" "}
            <span className="bold">
              Cyan, Magenta, Yellow, and Black (CMYK)
            </span>{" "}
            inks.
          </p>
          <p>
            To create smooth gradients and tones, printers use a technique
            called <span className="bold">halftoning</span>, where tiny dots of
            CMYK ink are arranged in patterns. From a distance, these dots blend
            together visually, but up close, you can see the individual colors.
            This technique is similar to the way <span>Pointillist</span>{" "}
            painters used small dots to create a full image.
          </p>
        </>
      ),
    },
    imgs: "/cmyk.png",
  },
  {
    info: {
      title: "Impressionism",
      artist: "Painting Light, Not Objects",
      children: (
        <>
          <p>
            Impressionist painters focused on capturing the{" "}
            <strong>effects of light and atmosphere</strong>, rather than simply
            representing the true or <strong>local color</strong> of objects.
            Instead of using black or gray for shadows, they used vibrant{" "}
            <strong>purples, blues, greens, and warm tones</strong> to reflect
            the way light interacted with surfaces in real time.
          </p>
          <p>
            This approach parallels how <strong>digital screens</strong> work:
            colors are created through <strong>light itself</strong>, not by
            applying dark pigments. Like an RGB display adjusting the intensity
            of red, green, and blue light to create color, Impressionists
            painted how light{" "}
            <strong>transformed color in different environments</strong>.
          </p>

          <h6>
            Pierre-Auguste Renoir –{" "}
            <span className="italic">Luncheon of the Boating Party</span> (1881)
          </h6>
          <p>
            In this lively scene, Renoir didn’t use flat or neutral tones for
            shadows. Instead, he used <strong>cool blues and purples</strong> to
            show how sunlight filtered through the canopy and reflected off
            surfaces and clothing. The shadows are full of color, contributing
            to the <strong>vibrant, sunlit atmosphere</strong> of the painting.
          </p>
          <p>
            The figures and objects are bathed in natural light, with colors
            shifting based on their surroundings. This focus on{" "}
            <strong>perceived color</strong> — how things look under certain
            lighting — mirrors the logic of{" "}
            <strong>additive color systems</strong>, where varying light
            intensities produce different hues and effects.
          </p>
        </>
      ),
    },
    imgs: {
      none: "/luncheon.jpg",
      rgb: "/luncheonRGB.png",
      cmyk: "/luncheonCMYK.jpg",
    },
  },
  {
    info: {
      title: "Pointillism",
      artist: "Paint Before Pixels",
      children: (
        <>
          <p>
            Pointillism was a painting technique developed in the late 1800s
            where artists applied small, distinct dots of pure color to the
            canvas. Instead of blending colors with a brush, they relied on the
            viewer’s eye to mix them through proximity — a process known as
            optical mixing.
          </p>
          <p>
            This approach is a direct precursor to halftone printing, where
            small dots of ink create full-color images. In both Pointillism and
            halftone printing, individual colors aren’t blended physically;
            instead, your brain combines them into smooth gradients and images
            when viewed from a distance.
          </p>
          <h6>
            Georges Seurat –{" "}
            <span className="italic">
              A Sunday Afternoon on the Island of La Grande Jatte
            </span>{" "}
            (1884–86)
          </h6>
          <p>
            In this painting, Seurat used tiny dots of complementary colors —
            like blue and orange, or red and green — placed side by side to
            create light, shadow, and form.
          </p>
          <p>
            Up close, the painting looks like a dense field of colorful points.
            But from a distance, these points visually blend, forming a vibrant
            and harmonious scene.
          </p>
          <p>
            This is similar to how CMYK printing uses small dots of cyan,
            magenta, yellow, and black ink to create full-color images. The
            color mixing happens in your perception, not on the surface.
          </p>
        </>
      ),
    },
    imgs: {
      none: "/grande.jpg",
      rgb: "/grandeRBG.png",
      cmyk: "/grandeCMYK.jpg",
    },
  },
  {
    info: {
      title: "Divisionism",
      artist: "Scientific Color Breakdown",
      children: (
        <>
          <p>
            Divisionism is a painting technique closely related to Pointillism,
            but with a stronger emphasis on the{" "}
            <strong>scientific separation</strong> of color into its components
            — hue, light, and shadow. Instead of blending colors on a palette,
            Divisionist artists applied individual strokes or dots of pure color
            in patterns based on <strong>color theory</strong>, aiming to create
            brighter, more vibrant effects through{" "}
            <strong>optical mixing</strong>.
          </p>
          <p>
            Like Pointillism, the colors don’t blend on the canvas — your{" "}
            <strong>brain mixes</strong> them based on their arrangement.
            Divisionism focused more on how{" "}
            <strong>light and color structure</strong> could be carefully
            controlled to create harmony, depth, and luminosity.
          </p>
          <p>
            This approach mirrors how both <strong>printed images</strong> and{" "}
            <strong>digital screens</strong> break down color into fundamental
            parts (CMYK or RGB), then recombine them through perception.
          </p>

          <h6>
            Gaetano Previati – <span className="italic">Maternity</span>{" "}
            (1890–91)
          </h6>
          <p>
            In this Divisionist painting, Previati used fine, directional
            strokes of <strong>separated color</strong> to create a glowing,
            almost ethereal effect. The light appears to radiate from within the
            image, created not by blending paint but by placing colors in
            structured, rhythmic patterns.
          </p>
          <p>
            The result is similar to how <strong>digital displays</strong>{" "}
            control light and color through patterns of RGB subpixels — each
            element contributes to the whole, and the viewer experiences a{" "}
            <strong>cohesive, luminous image</strong>.
          </p>
        </>
      ),
    },
    imgs: {
      none: "/maternity.jpg",
      rgb: "/maternityRGB.png",
      cmyk: "/maternityCMYK.jpg",
    },
  },
  // {
  //   info: {
  //     title: "The Dessert: Harmony in Red",
  //     artist: "Henri Matisse",
  //     children: (
  //       <p>
  //         "The painting reworks elements from Matisse's 1897 work The Desert.
  //         While that work was in an Impressionist style, the intense colors of
  //         the later painting are more consistent with Fauvism. The red of the
  //         room contrasts with the dark green of the landscape depicted outside
  //         the window. The dark blue swirls that line the tablecloth and walls
  //         contrast with the abundance of the rich red. Matisse was intentional
  //         about maintaining the realistic qualities of objects even as he
  //         experimented with the colors of their surrounding environment. For
  //         example, the lemons on the table are yellow and maintain a realistic
  //         shape and size. The woman in the painting provides a sense of reality
  //         in the painting. The woman is proportional to the table. The woman
  //         gives context to the time of the painting with the clothing she is
  //         wearing and the action she is completing. In the book Matisse: The Man
  //         and His Art, Katharine Kuh compares Harmony in Red with Matisse's
  //         painting Bathers with a Turtle, completed between 1907 and 1908. The
  //         curvature of the bodies in Bathers with a Turtle is similar to the
  //         pose of the woman in The Dessert: Harmony in Red.[4]  The painting is
  //         unusual for the way it explores the relationship between flatness and
  //         deep space. The red of the tablecloth and walls are the same color,
  //         making the surface appear unified, but surrounding objects convey a
  //         sense of depth. For instance, the chair appearing behind the table
  //         gives context to the presence of a table. There is a faint line that
  //         runs between the table and the wall, providing a further hint of
  //         three-dimensional space.[4]  The overwhelming and bold red color seen
  //         in The Dessert: Harmony in Red began a trend in Matisse's work. Pieces
  //         of work that followed created by Matisse included: The Red Studio and
  //         the Red Interior series."
  //       </p>
  //     ),
  //   },
  //   imgs: { rgb: "/matiRGB.png", cmyk: "matiCMYK.jpg", none: "mati.jpg" },
  // },
];

function App() {
  const [mode, setMode] = useState<"none" | "rgb" | "cmyk">("none");

  const [page, setPage] = useState(0);

  // useEffect(() => {
  //   setMode("none");
  // }, [page]);

  // const next = () => setImg((img + 1) % imgs.length);
  // const prev = () => setImg((img - 1 + imgs.length) % imgs.length);
  const next = () => setPage((page + 1) % pages.length);
  const prev = () => setPage((page - 1 + pages.length) % pages.length);

  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setZoom((currentZoom) => {
          const newZoom = Math.max(MAX_ZOOM, currentZoom - 0.25);

          console.log("Zoom In:", newZoom);
          return newZoom;
        });
      } else if (e.key === "ArrowDown") {
        setZoom((currentZoom) => {
          const newZoom = Math.min(MIN_ZOOM, currentZoom + 0.25);

          console.log("Zoom Out:", newZoom);
          return newZoom;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // cleanup on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const raw = pages[page].imgs; // raw: string | ImgProps
  const modesInactive = typeof raw === "string";
  const src = modesInactive
    ? raw // here TS knows raw: string
    : raw[mode];

  return (
    <>
      <Info {...pages[page].info}></Info>
      <div style={{ display: "flex", flexFlow: "column", gap: 24 }}>
        <Magnifier src={src} imgWidth={800} magnification={zoom} />

        <div
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "space-between",
            margin: "0px 24px",
            alignItems: "center",
          }}
        >
          <ButtonGroup
            hide={modesInactive}
            multiSelect
            buttons={[
              { label: "None", onClick: () => setMode("none") },
              { label: "RGB", onClick: () => setMode("rgb") },
              { label: "CMYK", onClick: () => setMode("cmyk") },
            ]}
          ></ButtonGroup>
          <div style={{ display: "flex", flexFlow: "row", gap: 16 }}>
            <div>
              <img src="/zoomIn.png" alt="" width={64} />
              <p>Zoom In</p>
            </div>
            <div>
              <img src="/zoomOut.png" alt="" width={64} />
              <p>Zoom Out</p>
            </div>
          </div>
          <ButtonGroup
            buttons={[
              { label: "Prev", img: Prev, onClick: () => prev() },
              { label: "Next", img: Next, onClick: () => next() },
            ]}
          ></ButtonGroup>
        </div>
      </div>
    </>
  );
}

export default App;
