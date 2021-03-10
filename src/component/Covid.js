import React,{useState,useEffect} from 'react'
import "../App.css"
import axios from 'axios'
import Chart from './Chart'
import Linechart from './Linechart'
// import { Bar } from 'react-chartjs-2';
function Covid() {

    const[active,setActive]=useState(0)
    const[death,setDeath]=useState(0)
    const[recover,setRecover]=useState(0)
    const[total,setTotal]=useState(0)
    const[regionData,setRegionData]=useState([])
    const[data,setData]=useState([])
    const[final,setFinal]=useState()
   
    
    const handleChange=(event)=>{
        setData(event.target.value)
        const filter=regionData.find(i=>i.region===event.target.value)
        setFinal(filter)
        console.log(filter)
    }

    useEffect(() => {
       axios.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
       .then(result=>{
        setActive(result.data.activeCases)
        setDeath(result.data.deaths)
        setRecover(result.data.recovered)
        setTotal(result.data.totalCases)
        setRegionData(result.data.regionData)
        })
}, [])

    return (
        <div className="container">
            <h1>Covid Tracker</h1>
            <div className="row">
                <div className="col-sm-3">
                    <div class="card">
                        <div class="card-body">
                            <h4>Active cases</h4>
                            <h5>{active}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                <div class="card">
                        <div class="card-body1">
                            <h4>Deaths</h4>
                            <h5>{death}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                <div class="card">
                        <div class="card-body2">
                            <h4>Recovered cases</h4>
                            <h5>{recover}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">  
                <div class="card">
                        <div class="card-body3">
                            <h4>Total cases</h4>
                            <h5>{total}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="drop">
                <select onChange={(event)=>handleChange(event)}>
                    <option>select</option>
                        {regionData.length>  0 ? regionData.map((region,i)=>{
                            return <option key={i} value={region.region}>{region.region}</option>
                        })
                        :null
                        }
                </select>   
            </div>

            {final?

            <div className="row">
            <div className="col-sm-4">
                <div class="card">
                    <div class="card-body1">
                        <h4>Deaths</h4>
                        <h5>{final.deceased}</h5><br/>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div class="card">
                    <div class="card-body2">
                        <h4>Recovered</h4>
                        <h5>{final.recovered}</h5><br />
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div class="card">
                    <div class="card-body3">
                        <h4>Total Infected</h4>
                        <h5>{final.totalInfected}</h5><br />
                    </div>
                </div>  
            </div>
        </div>
        
        :null}

            <div className="chart">
            <Chart active={active} total={final?final.totalInfected:total} death={final?final.deceased:death} recover={final?final.recovered:recover} />
            </div>
            <Linechart active={active} deceased={final?final.deceased:null} death={death} recovered={final?final.recovered:null} recover={recover} totalInfected={final?final.totalInfected:null} total={total}/>
                
         </div>
    )
}

export default Covid
