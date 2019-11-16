/**
 * @file heartRate.js
 * 
 * @overview
 * This script is used to generate the heart rate svg
 * Purposes: - use API call to get current heart rate
 * 			     - use Snap to alter heart.svg
 * Assumptions: - snap.svg-min.js have loaded
 *
 */

/**
 * @function attachCommunicationFunctions
 * @description prepares a JSON to be sent on button press
 * @fires SOME_API_CALL
 */

function h() {
  /**@function Snap() <= snap.svg-min.js */
    $.ajax({
    url: "http://localhost:3001/API/locationHistory/read",
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: {"Smartwatch": localStorage.getItem("currentSmartwatch")},
    processData: false,
        success: data => {
            let svg = Snap("#heartRate"); //  selecting a svg DOM element
  Snap.load("../images/heart.svg", f => {
    //  loading heart.svg
    svg.append(f.select("#usable")); //  appending the needed part from heart.svg to #heartRate
    /**
     * @todo API call to get heart rate and use it in the next line instead of the dummy value
     */
    svg
      .select("#bps")
      .attr({ text: data.docs[docs.length - 1].reading /*dummy*/ }) //  changing the text in the heart.svg
      .attr({ "font-size": "47px" }) //  readable text size
      .attr({"font-weight": "bold"}); //  bolding the text
  });
        }
  })
  
}
