import React, { useEffect } from "react";
import p5 from "p5";
import "./styles.css";

function Flow({count, setCount}) {
  const width = window.innerWidth - 60;
  const height = window.innerHeight;

  useEffect(() => {
    let points = [];
    var mult = 0.004;

    // if (count) {
    //   setCount(0)
    //   sketch.remove()
    // }

    let sketch = new p5((p5) => {

      p5.setup = () => {
        const canvas = p5.createCanvas(width, height * 0.95);
        canvas.style('z-index', -1);
        canvas.position(0, 0);
        p5.background("#181818");
        p5.angleMode(p5.DEGREES);
        p5.noiseDetail(1);

        var density = 50;
        var space = width / density;

        for (var x = 0; x < width; x += space) {
          for (var y = 0; y < height; y += space) {
            var p = p5.createVector(x + p5.random(-10, 10), y + p5.random(-10, 10));
            points.push(p);
          }
        }
      };

      p5.draw = () => {
        p5.noStroke();
        p5.fill(255);
        for (var i = 0; i < points.length; i++) {

          var r = p5.map(points[i].x, 0, width, 0, 11)
          var g = p5.map(points[i].x, 0, height, 50, 255)
          var b = p5.map(points[i].x, 0, width, 255, 251)
  
          p5.fill(r, g, b)
  
          var angle = p5.map(p5.noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);

          points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)));

          p5.ellipse(points[i].x, points[i].y, 0.3);
        }
      };
    });
    // setCount(1)
    // Clean up the p5 instance on component unmount
    return () => {
      sketch.remove();
    };
  }, [count]);
  return null;
}

export default Flow;
