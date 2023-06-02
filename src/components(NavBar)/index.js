import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavBarElements';

const NavBar = () => {
    return(
        <>
            <Nav>
                <Bars />

                <NavMenu>

                <NavLink to= "/settings" style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive? 'rgb(120,120,120)' :  'rgb(0,0,0)',
                        color: isPending? 'rgb(0,0,225)' : 'rgb(0,0,0)',             
                    };
                }}>
                    Settings
                </NavLink>

                <NavLink to='/sign-up' style={({isActive, isPending}) => {
                    return {
                        fontWeight: isActive? 'rgb(120,120,120)' :  'rgb(0,0,0)',
                        color: isPending? 'rgb(0,0,225)' : 'rgb(0,0,0)',      
                    }
                }}>
                </NavLink>
                <NavBtn>
                    <NavBtnLink to= '/signIn'>SignIn</NavBtnLink>
                </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavBar