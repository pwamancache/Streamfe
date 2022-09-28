import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import Apicall from '../Api/Api'
import Cookies from "js-cookie";
import Spinner from 'react-bootstrap/Spinner';
 function HighOrder(props) {
    const[loading,setLoading] = useState(false)
   const [data,setData] = useState([])
    useEffect(()=>
    {
        const fetchApi = async () => {
        const result =   await Apicall(props.url)
        setData(result)
        setLoading(true)
        }
        fetchApi()
    },[])

switch (props.type)
{
case "Guidelines":
const allguides = data.map((guide,index) =>
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
return(
    <>
    {loading?
      <Container>
        <Row>
            {allguides}
        </Row>
      </Container>:
      <Spinner animation="border" variant="primary" role="status" style={styles.spinnerStyle}/>
    }
    </>
)
case "Preview":
    const allproducts = data.map((prod,index) =>
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
    <>
    {loading?
    <Container>
        <Row>
        {allproducts}
        </Row>
    </Container>:
      <Spinner animation="border" variant="primary" role="status" style={styles.spinnerStyle}/>
}
    </>
  );
default:
    return (
        <div>No data found</div>
    )
}
}
const styles = {
  spinnerStyle: { 
    flex: 1,
    marginTop:240,
    marginLeft:600,
    justifyContent: 'center',
    alignItems:'center'
}
};
export default HighOrder;