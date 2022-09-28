import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'
import beachday from '../images/beach_day.svg'
import cloudhosting from '../images/cloud_hosting.svg'
import contentteam from '../images/content_team.svg'
import engteam from '../images/engineering_team.svg'
import healthy_habit from '../images/healthy_habit.svg'
import onlinestats from '../images/online_stats.svg'
import statis from '../images/statistic_chart.svg'
import PreviewModal from './Previewmodal.js'
import {Link} from 'react-router-dom'
import Cookies from "js-cookie";
import '../App.css';
function App(props) {
  //const [widgets,setWidgets] = useState([{}])
  const isAuthenticated = !!Cookies.get("token");
  if (!isAuthenticated) {
    props.history.push("/");
  }
  const [products,setProducts] = useState([{
    id:1,
    name:'Beach day',
    url:beachday,
    position:0
  },
  {
    id:2,
    name:'Healthy lifestyle',
    url:cloudhosting,
    position:1
  },
  {
    id:3,
    name:'Content team',
    url:contentteam,
    position:2
  },
  {
    id:4,
    name:'Healthy habit',
    url:healthy_habit,
    position:3
  },
  {
    id:5,
    name:'online stats',
    url:onlinestats,
    position:4
  },
  {
    id:6,
    name:'Statistics',
    url:statis,
    position:6
  },
 {
    id:7,
    name:'Engineering Team',
    url:engteam,
    position:7
  },
]
  )
  const allproducts = products.map((prod,index) =>
  (
   <Draggable 
   draggableId={`draggable-${prod.id}`} 
   key={`draggable-${prod.id}`} 
   index={index}>
    { (provided) =>(
    <Col md={4} className="my-4"
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    ref={provided.innerRef}>
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
    </Col>)
}
    </Draggable>

  ))
  console.log(allproducts)
  const ondragEnd = (result) =>
  {
    console.log(result)
    const productitems =[...products]
    console.log("index is " + result.source.index)
    const [orderedproducts]=productitems.splice(result.source.index,1)
    console.log('order products' + orderedproducts)
    productitems.splice(result.destination.index,0,orderedproducts)
    console.log('product items after drag and drop ' + JSON.stringify(productitems))
    setProducts(productitems)
    savewidgets(productitems)
  }
  const savewidgets = async (rearrangedwidg)=>
  {
    console.log('inside api ' + rearrangedwidg)
    const res = await fetch('http://localhost:8000/addscreenall',{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(rearrangedwidg)
    })
    const result = await res.json()
    console.log('here is the result of response ' + result)
    return result
  }
  return (
    <Container>
      <DragDropContext onDragEnd = {ondragEnd}>
       <Droppable
       droppableId="widgetsequence"
       direction="horizontal"
       type="column">
        {(provided)=>
          ( <Row
           {...provided.droppableProps}
           ref={provided.innerRef}
           >{allproducts}
            </Row>)
        }
      
      </Droppable>
      </DragDropContext>
      <Row>
      <Col><PreviewModal/></Col>
      <Col><Link to="/published" ><Button variant="danger">Deploy</Button></Link></Col>
      </Row>
    </Container>
  );
}
export default App;
