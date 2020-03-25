import './App.css';
import 'antd/dist/antd.css';
import { Select,Table } from 'antd';
import React, { useState , useEffect} from "react";
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts'

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function One() {

    let [xl, XL] = useState();
    let [xr, XR] = useState();
    let [fx, FX] = useState();

    const Ans = []

    const [datashow, setdatashow] = useState();

    const [getafcs, setgetafcs] = useState();
  const [getafx, setgetafx] = useState();
  let [getaxl, setgetaxl] = useState()
  let [getaxr, setgetaxr] = useState()

    useEffect(() => {
      axios.get("http://localhost:3001/api/users/showbi").then(res => {

        const tempfx = []
        const tempfcs = []
        const tempxl = []
        const tempxr = []

        for (let i = 0; i < res.data.data.length; i++) {
          tempfcs.push(<Option key={i} value={i} label={res.data.data[i].fx}>fn : {res.data.data[i].fx} <br/> xl : {res.data.data[i].xl} <br/> xr: {res.data.data[i].xr} </Option>)
          tempfx.push(res.data.data[i].fx)
          tempxl.push(res.data.data[i].xl)
          tempxr.push(res.data.data[i].xr)

        }
        setgetafcs(tempfcs)
        setgetafx(tempfx)
        setgetaxl(tempxl)
        setgetaxr(tempxr)
      })
    },[])


    function menu(value){


          FX(getafx[value])
          XL(getaxl[value])
          XR(getaxr[value])

    }

    

    function one() {
      
      const f = (fx, value) => parse(fx).evaluate({ x: value })
      const error = (xm, Oxm) => Math.abs((xm - Oxm) / xm)
        
      var i = 0, xm = 0, Oxm
        
        do{

          Oxm = xm
          xm = (xl + xr) / 2

          if (f(fx, xm) * f(fx, xl) > 0) {
            xl = xm
          }
          else {
            xr = xm
          }

          Ans.push({
            i: i,
            xl: xl.toFixed(6),
            xr: xr.toFixed(6),
            xm: xm.toFixed(6),
            fxm: f(fx, xm).toFixed(6),
            error: error(xm, Oxm).toFixed(6)
          });

          i++;
        
        }while (error(xm, Oxm) >= 0.0000009);
        setdatashow(Ans)
      }


        return(

        <div className="BG"> <br/>
            <center><h1>Bisection</h1></center>

            <center>
            <input value={xl} onChange={e => XL(+e.target.value)} placeholder="XL"/><br/><br/>
            <input value={xr} onChange={e => XR(+e.target.value)} placeholder="XR"/><br/><br/>
            
            <input  value={fx} onChange={event => FX(event.target.value)} placeholder="F(x)"/>  
            
            <br/><br/>
            
           <button onClick={one}> Check</button>

           <Select defaultValue="set from db" style={{ width: 300 }}  onChange={menu}>

                           {getafcs}

                       </Select>

           <div className = "table">
            <Table style={{ marginTop: 30 }} dataSource={datashow}>
              <Column title="Iterations" dataIndex="i" key="i" />
              <Column title="XL" dataIndex="xl" key="xl" />
             <Column title="XR" dataIndex="xr" key="xr" />
              <Column title="XM" dataIndex="xm" key="xm" />
              <Column title="F(xm)" dataIndex="fxm" key="fxm" />
              <Column title="Error" dataIndex="error" key="error" />
            </Table>
            </div>

            <LineChart width={1900} height={800} data={datashow} margin={{ top: 30, right: 20, left: 80, bottom: 5 }} style={{ backgroundColor: "#Fxmaa" }}>

                         <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="x" />
                          <YAxis type="number" dataKey="fxm" domain={["auto", "auto"]} allowDataOverflow="true"/>
                          <Tooltip />
                          <Legend />
                          <Line type="linear" dataKey="fxm" stroke="#82ca9d" strokeWidth={4} />

            </LineChart>
            
              </center>
                 

       </div>
        )
    
}
export default One;
