import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import Cookies from "js-cookie";
import '../App.css';
function Guidelines(props) {
  const isAuthenticated = !!Cookies.get("token");
  console.log('authen' + isAuthenticated)
  if (!isAuthenticated) {
    props.history.push("/");
  }
    const [guidelines,setGuidelines] = useState([{}])
    const apicall = async ()=>
    {
        const res = await fetch('http://localhost:8000/guidelines',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        const result = await res.json()
        setGuidelines(result)
        console.log('inside ' + result)
        return result.json()
    }
    useEffect(()=>
    {
        apicall() 
    },[])
  const allguides = guidelines.map((guide,index) =>
  (
    <Col md={4} className="my-4" key={index} >
      <Card >
        <Card.Header>
        {index+1} - {guide.Title}
        </Card.Header>
        <Card.Body>
        <Card.Title> <h5>{guide.Title}</h5></Card.Title>
        <Card.Text>{guide.body}</Card.Text>
          
        </Card.Body>
      </Card>
    </Col>))
  return (
    <Container>
        <Row>
        {allguides}
        </Row>
    </Container>
  );
}
export default Guidelines;
