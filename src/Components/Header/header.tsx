import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Button} from "@material-ui/core";


const Header: React.FC = () => {
    let [showHeader, setShowHeader] = useState(false)

  return (
    <div className="App">
        {showHeader?
        <div style = {{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
<Button variant="contained" color="primary" onClick = {() =>setShowHeader(false)}>Hide dev header</Button>
<NavLink style = {{textDecoration : 'none', color: 'black'}} to='/login'>sign-in</NavLink>
<NavLink style = {{textDecoration : 'none', color: 'black'}} to='/registration'>register</NavLink>
<NavLink style = {{textDecoration : 'none', color: 'black'}} to='/password_recover'>forgot</NavLink>
<NavLink style = {{textDecoration : 'none', color: 'black'}} to='/profile'>neko</NavLink>
        </div>:<Button variant="contained" color="primary" onClick = {() =>setShowHeader(true)}>Show dev header</Button>
    }
    </div>
  );
};

export default Header;