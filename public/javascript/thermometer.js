//acquired from https://codepen.io/mjimeyg/pen/oJMzbz?editors=1010
class Thermometer {
	// Declared global variables
	

	/******************************************************************************************************
	*                                                                                                     *
	*   The main function.                                                                                *
	*                                                                                                     *
	*                                                                                                     *
	*   Arguments:                                                                                        *
	*                                                                                                     *
	*   (string)  svg          : The DOM element string tag for the svg object (e.g. "#Thermometer");     *
	*   (int)     initialT     : The initial temperature to display.                                      *
	*   (int)     minT         : The minimum displayable temperature.                                     *
	*   (int)     maxT         : The maximum displayable temperature.                                     *
	*   (int)     h            : The svg viewport height.                                                 *
	*   (int)     w            : The svg viewport width.                                                  *
	*                                                                                                     *
	******************************************************************************************************/
	constructor(svg, initialT, minT, maxT, h, w, enablehighlow) {
    
	
	  // Initialise the variables.
    this.maxHeight = 10,     // The minimum x coord for the mercury line.
		this.minHeight = 52,     // The maximum y coord for the mercury line.
	  this.maxTemp = maxT;
	  this.minTemp = minT;
	  this.currTemp = initialT;
	  this.height = h;
	  this.width = w;
	  this.thermometer = Snap(svg);
	  this.enableHighLow = enablehighlow;

	  // Create the filled in circle for the mercury in the bulb.
	  this.bulbCircle = this.thermometer.circle(13, 58.5, 8);  // circle(x, y, radius)
	  this.bulbCircle.attr({
		fill: "#ff0000" // Fill color is red.
	  });
	  
	  /*************************************************************************************************************************************
	  * Define the outline path:                                                                                                           *
	  *                                                                                                                                    *
	  * "m 8,10" : Move to x:8 and y:10.                                                                                                   *
	  *                                                                                                                                    *
	  * "a5,5 1 1,1 10,0" : Draw the top arc of the thermometer.                                                                           *
	  *                                                                                                                                    *
	  * "v40" : Draw the right side vertical line down to the bulb.                                                                        *
	  *                                                                                                                                    *
	  * "a10,10 0 1,1 -10,0" : Draw the bulb of the thermometer.                                                                           *
	  *                                                                                                                                    *
	  * "z" : Close the outline.  Automatically draws the vertical line from the last point of the bulb to the first part of the outline.  *
	  *                                                                                                                                    *
	  *************************************************************************************************************************************/
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

	  /********************************************************************************************
	  *                                                                                           *
	  * Draw the mercury:                                                                         *
	  *                                                                                           *
	  * A simple line that starts at the bulb and draws up.                                       *
	  * The length is determined by the temperature supplied converted to the acceptable range.   *
	  *                                                                                           *
	  * line(firstX, firstY, secondX, secondY)                                                    *
	  *                                                                                           *
	  ********************************************************************************************/
	  this.mercuryDraw = this.thermometer.line(13, 51, 13, this.scaleToRange(this.currTemp));
	  this.mercuryDraw.attr({
		fill: "none",
		stroke: "#FF0000",
		"stroke-width": 6,
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-miterlimit": 10
	  });
	  
	  /****************************************************
	  *                                                   *
	  * Draw the temperature value as text in the bulb.   *
	  *                                                   *
	  * text(x,y,string)                                  *
	  *                                                   *
	  ****************************************************/
	  this.mercuryText = this.thermometer.text(12.5, 61, this.currTemp + "\u00B0");
	  this.mercuryText.attr({
		"text-anchor": "middle",
		stroke: "none",
		fill: "#FFFFFF",
		"font-size": "6px",
		"font-family": "Arial",
		"font-weight": "bold"
	  });
	  
	  
	  /****************************************************
	  *                                                   *
	  * If enableHighLow is true then draw the max and    *
	  * min values.                                       *
	  *                                                   *
	  ****************************************************/
	  if(this.enableHighLow) {
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

	/**********************************************************
	*                                                         *
	* The function to call when you want to display           *
	* a new value.                                            *
	*                                                         *
	*   Arguments:                                            *
	*                                                         *
	*   (int)  temp          : The temperature to display.    *
	*                                                         *                                            
	**********************************************************/
	newTemp(temp, max, min) {
	  this.mercuryText.attr({
		text: temp + "\u00B0"
	  });
	  var newHeight;
	  newHeight = this.scaleToRange(temp);
	  this.mercuryDraw.animate({ y2: newHeight, y1: this.minHeight }, 1000, mina.linear);
	  if(this.enableHighLow) {
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

	/**********************************************************
	*                                                         *
	* This function is used internally to convert the         *
	* supplied temperature to a value within the height range *
	* of the mercury.                                         *
	*                                                         *
	*   Arguments:                                            *
	*                                                         *
	*   (int)  x          : The temperature to convert.       *
	*                                                         *                                            
	**********************************************************/
	scaleToRange(x) {
	  var t;
	  t = this.minHeight + ((x - this.minTemp) * (this.maxHeight - this.minHeight)) / (this.maxTemp - this.minTemp);  // Based on a formula googled from various sources.
	  return t;
	}
}

const t = thermo => {new Thermometer(thermo, 36.9, 30, 43, 200, 50, false)};

