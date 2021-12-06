import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';

function NavigationBar (props) {

    const doLogout = event => {
        event.preventDefault();
        localStorage.setItem("user_data", "")
        localStorage.setItem("token", "")
        props.onLogout(false);
        window.location.href = '/';
    };

    return (
        <div className='navi'>
            <NavigationBar bg="light" expand="lg">
                <Container>
                    <NavigationBar.Brand href= '/'>
                        {/* insert logo here */}
                        <h3 id='navTitle'>QU3ST</h3>
                    </NavigationBar.Brand>
                    <NavigationBar.Toggle aria-controls="basic-navbar-nav" />
                    <NavigationBar.Collapse id="basic-navbar-nav">
                    {
                        props.active ? 
                            <Button type="button" id="logoutButton" className="navBtn" onClick={doLogout}> Log Out </Button> :
                            <Button href="/login" className="navBtn">Sign In</Button>
                    }
                    </NavigationBar.Collapse>
                </Container>
            </NavigationBar>
        </div>
    )
}

export default NavigationBar 