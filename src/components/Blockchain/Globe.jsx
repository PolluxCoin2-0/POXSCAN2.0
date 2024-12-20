import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const Globe = () => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    // Create root and set themes
    const root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    // Create the map chart
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
      })
    );

    // Add zoom control
    const zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
    zoomControl.homeButton.set("visible", true);

    // Add main polygon series
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0xdadada),
    });

    // Add clustered point series
    const pointSeries = chart.series.push(am5map.ClusteredPointSeries.new(root, {}));

    // Configure cluster bullets
    pointSeries.set("clusteredBullet", function (root) {
      const container = am5.Container.new(root, {
        cursorOverStyle: "pointer",
      });

      container.children.push(
        am5.Circle.new(root, {
          radius: 8,
          tooltipY: 0,
          fill: am5.color(0xff8c00),
        })
      );

      container.children.push(
        am5.Circle.new(root, {
          radius: 12,
          fillOpacity: 0.3,
          tooltipY: 0,
          fill: am5.color(0xff8c00),
        })
      );

      container.children.push(
        am5.Circle.new(root, {
          radius: 16,
          fillOpacity: 0.3,
          tooltipY: 0,
          fill: am5.color(0xff8c00),
        })
      );

      const label = container.children.push(
        am5.Label.new(root, {
          centerX: am5.p50,
          centerY: am5.p50,
          fill: am5.color(0xffffff),
          populateText: true,
          fontSize: "8",
          text: "{value}",
        })
      );

      container.events.on("click", function (e) {
        pointSeries.zoomToCluster(e.target.dataItem);
      });

      return am5.Bullet.new(root, {
        sprite: container,
      });
    });

    // Configure regular bullets
    pointSeries.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 6,
          tooltipY: 0,
          fill: am5.color(0xff8c00),
          tooltipText: "{title}",
        }),
      });
    });

    // Set data
    const cities = [
      { title: "Vienna", latitude: 48.2092, longitude: 16.3728 },
      { title: "Minsk", latitude: 53.9678, longitude: 27.5766 },
      { title: "Brussels", latitude: 50.8371, longitude: 4.3676 },
      { title: "Sarajevo", latitude: 43.8608, longitude: 18.4214 },
      { title: "Sofia", latitude: 42.7105, longitude: 23.3238 },
      { title: "Zagreb", latitude: 45.815, longitude: 15.9785 },
      { title: "Pristina", latitude: 42.666667, longitude: 21.166667 },
      { title: "Prague", latitude: 50.0878, longitude: 14.4205 },
      { title: "Copenhagen", latitude: 55.6763, longitude: 12.5681 },
      // Add more cities as needed
    ];

    pointSeries.data.setAll(
      cities.map((city) => ({
        geometry: { type: "Point", coordinates: [city.longitude, city.latitude] },
        title: city.title,
      }))
    );

    // Animate the map
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "550px" }} />;
};

export default Globe;
