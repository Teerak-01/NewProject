import React, { useState } from "react";
import './App.css';
import 'antd/dist/antd.css';
import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts'

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function New() {

    let [x, X] = useState();
    let [fx, FX] = useState();

    const Ans = []

    const [datashow, setdatashow] = useState();

    function newt() {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        const error = (x, fn) => Math.abs(fn / x)*100 
        var i = 0, Ox , fn
        
        do{

          Ox = x
          fn = f(fx,x)/(x*2)
          x = Ox - fn

          Ans.push({
            i: i,
            x: Ox.toFixed(6),
            fx: f(fx, x).toFixed(6),
            error: error(x, fn).toFixed(6)
          });

          i++;
        
        }while (error(x, fn) >= 0.0000009);

        setdatashow(Ans)
      }
      


        return(

        <div className="BG"> <br/>
            <center><h1>Newton Raphon</h1></center>

            <center>
            <input value={x} onChange={e => X(+e.target.value)} placeholder="X"/><br/><br/>
            
            
            <input  value={fx} onChange={event => FX(event.target.value)} placeholder="F(x)"/>  
            
            <br/><br/>
            
           <button onClick={newt}> Check</button>
           <div className = "table">
            <Table style={{ marginTop: 30 }} dataSource={datashow}>
              <Column title="Iterations" dataIndex="i" key="i" />
              <Column title="X" dataIndex="x" key="x" />
              <Column title="F(x)" dataIndex="fx" key="fx" />
              <Column title="Error" dataIndex="error" key="error" />
            </Table>
            </div>

            <LineChart width={1900} height={800} data={datashow} margin={{ top: 30, right: 20, left: 80, bottom: 5 }} style={{ backgroundColor: "#Fxmaa" }}>

                         <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="x" />
                          <YAxis type="number" dataKey="fx" domain={["auto", "auto"]} allowDataOverflow="true"/>
                          <Tooltip />
                          <Legend />
                          <Line type="linear" dataKey="fx" stroke="#82ca9d" strokeWidth={4} />

            </LineChart>
            
              </center>
                 

       </div>
        )
    
}
export default New;