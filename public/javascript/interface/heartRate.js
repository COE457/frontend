/**
 * @file heartRate.js
 *
 * @overview
 * This script is used to generate the heart rate svg
 * 
 * Assumptions: - snap.svg-min.js have loaded
 *
 */

/**
 * @function genHeartRate
 * @description takes a heart rate and generates an svg image containing it
 */

function genHeartRate(icon, result) {
  let svg = Snap(icon); //  selecting a svg DOM element
  Snap.load("../images/heart.svg", f => {
    //  loading heart.svg
    svg.append(f.select("#usable")); //  appending the needed part from heart.svg to #heartRate
    svg
      .select("#bps")
      .attr({ text: result + "bpm" }) //  changing the text in the heart.svg
      .attr({ "font-size": "47px" }) //  readable text size
      .attr({ "font-weight": "bold" }); //  bolding the text
  });
}
