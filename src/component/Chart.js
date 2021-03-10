import React from 'react';
import CanvasJSReact from '../external/canvasjs.react.js' ;
// import Covid from "./Covid	"
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;    
 
function Chart({active,total,death,recover}) {	

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", //"light1", "dark1", "dark2"
			title:{
				text: "Bar chart"
			},
			axisY: {
				includeZero: true
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ label: "Active cases", y:active},
					{ label: "Death", y: death },
					{ label: "Recover Cases", y: recover },
					{ label: "Total cases", y: total },
				]
			}]

		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
			
			/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	
}
export default Chart;