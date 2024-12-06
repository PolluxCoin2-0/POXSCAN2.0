import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

export default function GlobeComponent() {
  const [countries, setCountries] = useState({ features: [] });
  const [line, setLine] = useState({ flights: [] });
  const [lineHistory, setLineHistory] = useState({ airports: [] });
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Fetch data
  useEffect(() => {
    fetch("../../../public/data/custom.geojson")
      .then((res) => res.json())
      .then(setCountries);
    fetch("../../../public/data/line.json")
      .then((res) => res.json())
      .then(setLine);
    fetch("../../../public/data/lineHistory.json")
      .then((res) => res.json())
      .then(setLineHistory);
  }, []);

  const globeRef = useRef();

  useEffect(() => {
    const globe = globeRef.current;

    // Disable zoom and configure controls
    const controls = globe.controls();
    controls.autoRotate = true; // Auto-rotate globe
    controls.autoRotateSpeed = -0.8;
    controls.enableRotate = true; // Allow globe rotation

    // Resize listener for responsiveness
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Globe
      ref={globeRef}
      waitForGlobeReady={true}
      width={dimensions.width} // Dynamic width
      height={dimensions.height} // Dynamic height
      backgroundColor="rgba(0, 0, 0, 0)"
      rendererConfig={{ alpha: true }}
      animateIn={true}
      enableGlobeGlow={true}
      globeGlowColor="#3C763D" // Green glow
      globeGlowRadiusScale={0.1} // Reduced glow radius to prevent padding
      showAtmosphere={true}
      atmosphereColor="#00FF00" // Green atmosphere
      atmosphereAltitude={0.1}
      hexPolygonsData={countries.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.7}
      hexPolygonColor={() => "rgba(0, 255, 0, 0.6)"} // Green hexagons
      arcsData={line.flights}
      arcColor={() => "#00FF00"} // Green arcs
      arcAltitude={0.2}
      arcDashGap={1}
      arcDashAnimateTime={1000}
      labelsData={lineHistory.airports}
      labelColor={() => "#00FF00"} // Green labels
      labelDotRadius={0.5} // Larger dots for labels
      labelText={(e) => e.city} // Dynamic text
      pointsData={lineHistory.airports}
      pointColor={() => "#00FF00"} // Green points
      pointRadius={0.3} // Adjust radius for better visibility
      pointAltitude={0.07}
    />
  );
}
    