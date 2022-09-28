import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import Cookies from "js-cookie";
import '../App.css';
function Preview(props) {
  const isAuthenticated = !!Cookies.get("token");
  console.log('authen' + isAuthenticated)
  if (!isAuthenticated) {
    props.history.push("/");
  }
    const [widgetproduct,setWidgetproduct] = useState([{}])
    const apicall = async ()=>
    {
        const res = await fetch('http://localhost:8000/widget',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        const result = await res.json()
        setWidgetproduct(result)
        console.log('inside ' + result)
        return result.json()
    }
    useEffect(()=>
    {
        apicall() 
    },[])
  const allproducts = widgetproduct.map((prod,index) =>
  (
    <Col md={4} className="my-4" key={index} >
      <Card >
        <Card.Header>
        <img src={prod.url} alt={prod.name} style={{height:"50px",width:"50px"}} ></img>
        </Card.Header>
        <Card.Body>
        <Card.Title> <h4>{prod.name}</h4></Card.Title>
        <Card.Text>This widget {prod.name} is to be used for design</Card.Text>
          <Button variant="info">Interative</Button>
        </Card.Body>
      </Card>
    </Col>))
  return (
    <Container>
        <Row>
        {allproducts}
        </Row>
    </Container>
  );
}
export default Preview;
