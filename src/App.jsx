import './App.css'

function Card() {
  return (
    <div>
      <h1>Hello </h1>
      <p>Hello there_1{name}</p>
    </div>
  )
}

function App() {
  return ( 
    <div>
      <p style={{color:'red', width:'100px', height:'100px', background:'blue'}}>Hello one</p>
      <p style={{color:'white', width:'150px', height:'150px', background:'black'}}>Hello two</p>
      <p style={{color:'black', width:'200px', height:'200px', background:'white'}}>Hello three</p>
      <p style={{color:'blue', width:'250px', height:'250px', background:'green'}}>Hello four</p>
    </div>
    
  )

 
}


export default App

