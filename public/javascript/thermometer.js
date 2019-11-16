/**
 * @file thermometer.js
 *
 * @overview
 * This script is used to generate an svg picture that resembles a thermometer with temperature
 *
 * @copyright https://codepen.io/mjimeyg/pen/oJMzbz?editors=1010
 */
class Thermometer {
    // Declared global variables
  
    constructor(svg, initialT, minT, maxT, h, w, enablehighlow) {
      // Initialise the variables.
      (this.maxHeight = 10), // The minimum x coord for the mercury line.
        (this.minHeight = 52), // The maximum y coord for the mercury line.
        (this.maxTemp = maxT);
      this.minTemp = minT;
      this.currTemp = initialT;
      this.height = h;
      this.width = w;
      this.thermometer = Snap(svg);
      this.enableHighLow = enablehighlow;
  
      // Create the filled in circle for the mercury in the bulb.
      this.bulbCircle = this.thermometer.circle(13, 58.5, 8); // circle(x, y, radius)
      this.bulbCircle.attr({
        fill: "#ff0000" // Fill color is red.
      });
  
      this.outlinePath = "m 8,10 a5,5 1 1,1 10,0 v40 a10,10 0 1,1 -10,0 z";
      this.outlineDraw = this.thermometer.path(this.outlinePath); // Draw the outline.
      this.outlineDraw.attr({
        fill: "none",
        stroke: "#000000",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": 10
      });
  
      this.mercuryDraw = this.thermometer.line(
        13,
        51,
        13,
        this.scaleToRange(this.currTemp)
      );
      this.mercuryDraw.attr({
        fill: "none",
        stroke: "#FF0000",
        "stroke-width": 6,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": 10
      });
  
      this.mercuryText = this.thermometer.text(
        12.5,
        61,
        this.currTemp + "\u00B0"
      );
      this.mercuryText.attr({
        "text-anchor": "middle",
        stroke: "none",
        fill: "#FFFFFF",
        "font-size": "6px",
        "font-family": "Arial",
        "font-weight": "bold"
      });
  
      if (this.enableHighLow) {
        this.highText = this.thermometer.text(26, 10, this.currTemp + "\u00B0");
        this.highText.attr({
          "text-anchor": "middle",
          stroke: "none",
          fill: "#ff0000",
          "font-size": "6px",
          "font-family": "Arial",
          "font-weight": "bold"
        });
  
        this.lowText = this.thermometer.text(0, 51, this.currTemp + "\u00B0");
        this.lowText.attr({
          "text-anchor": "middle",
          stroke: "none",
          fill: "#0000ff",
          "font-size": "6px",
          "font-family": "Arial",
          "font-weight": "bold"
        });
      }
    }
  
    newTemp(temp, max, min) {
      this.mercuryText.attr({
        text: temp + "\u00B0"
      });
      var newHeight;
      newHeight = this.scaleToRange(temp);
      this.mercuryDraw.animate(
        { y2: newHeight, y1: this.minHeight },
        1000,
        mina.linear
      );
      if (this.enableHighLow) {
        this.highText.attr({
          text: max + "\u00B0"
        });
        var newHeight;
        newHeight = this.scaleToRange(max);
        this.highText.animate({ y: newHeight }, 1000, mina.linear);
  
        this.lowText.attr({
          text: min + "\u00B0"
        });
        var newHeight;
        newHeight = this.scaleToRange(min);
        this.lowText.animate({ y: newHeight }, 1000, mina.linear);
      }
    }
  
    scaleToRange(x) {
      var t;
      t =
        this.minHeight +
        ((x - this.minTemp) * (this.maxHeight - this.minHeight)) /
          (this.maxTemp - this.minTemp); // Based on a formula googled from various sources.
      return t;
    }
  }
  
  /**
   * @function t
   * @param {string} thermo the id of the svg element the thermometer should be loaded in
   * @fires Thermometer constructor
   */
  const t = thermo => {
    new Thermometer(thermo, 36.9, 30, 43, 200, 50, false);
  };