import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button } from 'antd';
import { Route, NavLink,Switch} from "react-router-dom";

import home from './home'
import bisec from './bisec'
import fal from './fal'
import one from './one'
import newrap from './newrap'
import Seca from './Seca'
import NotAvailable from './NotAvailable'

const R = (
  <Menu>
    <Menu.Item>
        <NavLink to ="/bisec" >Bisection </NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/fal" >False Position</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/one" >One Point Ireration</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/newrap" >Newton  </NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/Seca" >Secant</NavLink>
    </Menu.Item>
  </Menu>
);

const L = (
  <Menu>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Cramer Rule(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Gauss Elimination Method(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Gauss-Jordan Method(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >LU Decompositon Method(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Jacobi Iteration Method(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
     <NavLink to ="/NotAvailable" >Gauss-Seidel Iteration Method(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Conjugate Gradient Method(ยังไม่ทำ)</NavLink>
    </Menu.Item>
  </Menu>
);

const I = (
  <Menu>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Linear Interpolation(Newton)(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Linear Interpolation(Lagrange)(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Quadratic Interpolation(Newton)(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Quadratic Interpolation(Lagrange)(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Polynomial Interpolation(Newton)(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Polynomial Interpolation(Lagrange)(ยังไม่ทำ)</NavLink>
    </Menu.Item>
  </Menu>
);

const LS = (
  <Menu>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Linear Regression(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Polynomial Regression(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Multiple Regression(ยังไม่ทำ)</NavLink>
    </Menu.Item>
  </Menu>
);

const NI = (
  <Menu>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Composite Trapezoidal Rule(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Composite Simpson's Rule(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Simpson's Rule(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Trapezoidal Rule(ยังไม่ทำ)</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to ="/NotAvailable" >Romberg Integration(ยังไม่ทำ)</NavLink>
    </Menu.Item>
  </Menu>
);

function App() {
  return (
    <div >
      <header className="App-header">&nbsp;&nbsp;
         <Menu>
         <Menu.Item>
                <NavLink exact to ="/">Home </NavLink>
          </Menu.Item>
         </Menu>&nbsp;&nbsp;
            <Dropdown overlay={R} placement="bottomLeft" >
              <Button>Root of Equation</Button>
            </Dropdown>&nbsp;&nbsp;
            <Dropdown overlay={L} placement="bottomLeft">
              <Button>Linear</Button>
            </Dropdown>&nbsp;&nbsp;
      
            <Dropdown overlay={I} placement="bottomLeft">
              <Button>Inerpoltion and Extrapolation</Button>
            </Dropdown>&nbsp;&nbsp;

            <Dropdown overlay={LS} placement="bottomLeft">
              <Button>Least-Squares Regression</Button>
            </Dropdown>&nbsp;&nbsp;
          
            <Dropdown overlay={NI} placement="bottomLeft">
              <Button>Numerical Integration and Differentation</Button>
            </Dropdown>
          <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Numerical</h1>
          
      </header>
          
            <Switch>
              <Route exact path = "/" component = {home}/>
              <Route exact path = "/NotAvailable" component = {NotAvailable}/>
              <Route exact path = "/bisec" component = {bisec}/>
              <Route exact path = "/fal" component = {fal}/>
              <Route exact path = "/one" component = {one}/>
              <Route exact path = "/Seca" component = {Seca}/>
              <Route exact path = "/newrap" component = {newrap}/>
            </Switch>

    </div>  
    
  )
}

export default App;
