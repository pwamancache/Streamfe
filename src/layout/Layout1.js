import React from 'react';
import Sidenav from './Sidenav'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
function Layout1(props) {
    const {children} = props
    return (
        <Container>
                <Row>
                    <Sidenav/>
                </Row>
                <Row>
                    {children}
                </Row>
        </Container>
    );
}

export default Layout1;