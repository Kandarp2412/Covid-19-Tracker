import React from 'react';
import CanvasJSReact from '../external/canvasjs.react.js' ;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;    
 
function Chart({active,death,recover,total,deceased,recovered,totalInfected}) {	
    // console.log(recovered)

		const options = {
			animationEnabled: true,
			theme: "light1", //"light1", "dark1", "dark2"
			title:{
				text: " Line chart"
			},
			axisY: {
				title:"Cases"
			},
            toolTip:{
                shared:true
            },
			data: [{
				type: "spline", 
				name:"India",
				showInLegend:true,

				dataPoints: [
                    {label: "Active Cases",y:active},
                    {label:"Death" , y : death},
                    {label:'Recover',y:recover},
                    {label:"Total Cases",y:total}
				]
            },
            {
                type: "spline", 
				name:"State",
				showInLegend:true,

                dataPoints: [
                    {label: "Active Cases",y:active},
                    {label:"Death" , y : deceased},
                    {label:'Recover',y:recovered},
                    {label:"Total Cases",y:totalInfected}
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