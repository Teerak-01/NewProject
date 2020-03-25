import React, { useState } from "react";
import './App.css';
import 'antd/dist/antd.css';
import { Select,Table } from 'antd';
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

    function one() {
      
      const f = (fx, value) => parse(fx).evaluate({ x: value })
      const error = (xm, Oxm) => (Math.abs((xm - Oxm) / xm))*100
        
      var i = 0, xm = 0, Oxm
        
        do{

            Oxm = xm

            xm = xr - ( (f(fx,xr)* (xl-xr)) / (f(fx,xl)-f(fx,xr)) )
          

          Ans.push({
            i: i,
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
            <center><h1>Secant</h1></center>

            <center>
            <input value={xl} onChange={e => XL(+e.target.value)} placeholder="X0"/><br/><br/>
            <input value={xr} onChange={e => XR(+e.target.value)} placeholder="X1"/><br/><br/>
            
            <input  value={fx} onChange={event => FX(event.target.value)} placeholder="F(x)"/>  
            
            <br/><br/>
            
           <button onClick={one}> Check</button>
           <div className = "table">
            <Table style={{ marginTop: 30 }} dataSource={datashow}>
              <Column title="Iterations" dataIndex="i" key="i" />
              <Column title="Xk" dataIndex="xm" key="xm" />
              <Column title="F(x)" dataIndex="fxm" key="fxm" />
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
