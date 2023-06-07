import React, { useEffect } from "react";
import p5 from "p5";
import "./styles.css";

function Flow() {
  const width = window.innerWidth-50;
  const height = window.innerHeight-50;

  useEffect(() => {
    const sketch = new p5((p5) => {
      let points = [];
      var mult = 0.005;

      p5.setup = () => {
        const canvas = p5.createCanvas(width, height);
        canvas.style('z-index', -1);
        canvas.position(0, 0);
        p5.background("#181818");
        p5.angleMode(p5.DEGREES);
        p5.noiseDetail(1)


        var density = 20;
        var space = width / density;

        for (var x = 100; x < width; x += space) {
            for (var y = 100; y < height; y += space) {
                var p = p5.createVector(x + p5.random(-10, 10), y + p5.random(-10, 10));
                points.push(p); 
            }
        }
      };

      p5.draw = () => {
        p5.noStroke();
        p5.fill("rgb(171, 255, 251)");

        for (var i = 0; i < points.length; i++) {
            var angle = p5.map(p5.noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)

            points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))

            p5.ellipse(points[i].x, points[i].y, 0.2);
        }
      };
    });
    // Clean up the p5 instance on component unmount
    return () => {
      sketch.remove();
    };
  }, []);

  return <div className="overlap"></div>;
}

export default Flow;
