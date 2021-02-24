import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friends= ['Rakib','jabid','Karim','Monir']
  const products =[{name:'PDF Reader', Price:'$50'},
    { name:'Illustrator', Price:'$5.45'},
    { name:'Photoshop', Price:'$20.20'}
  ]
  return (
    <div className="App">
      <header className="App-header">
          <Counter></Counter>
          <User></User>
        <ul>
          {
            friends.map(friend=><li>{friend}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd=><Product product1={pd}></Product>)
        }
        <Person name={friends[0]} job="student"></Person>
        <Person name="Bappi" job="teacher"></Person>
        <Person name="Hira" job="engineer"></Person>
        <h1>my heading</h1>
        <p>My first project</p>
      </header>
    </div>
  );
}

function User(){
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(data => setUsers(data) )
  },[])
  return(
    <div>
      <h3>Data</h3>
     <ul>
       {
         users.map(user =><li>{user.name}</li>)
       }
     </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount]=useState(1)
  const handleIncrease = () => setCount(count+1);
  return(
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Product(props){
  const productStyle ={
    border:'1px solid grey',
    backgroundColor: 'lightgrey',
    borderRadius:'5px',
    margin:'10px',
    padding:'5px',
    height:'200px',
    wight:'300px',
    float :'left'
  }
  const {name,Price} = props.product1;
  return(
    <div style= {productStyle}>
      <h2>{name}</h2>
      <h3>{Price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const styleDiv={
 border:'2px solid red',
 margin:'10px',
 padding:'5px'
  }
  return (
  <div style= {styleDiv}>
  <h1>Name:{props.name}</h1>
       <h3>Job:{props.job}</h3>
   </div>
  )
}

export default App;
