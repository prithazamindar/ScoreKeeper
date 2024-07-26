import './App.css';
import {root} from './index';
import React from 'react';

let score=0;
let wicket=0;
let ballWiseRes=[];
let hit=0;
let inputRef=React.createRef();

function addScore(num){
  /*if(wicket<10){
    score+=num;
    ballWiseRes.push(num);
    root.render(<App/>);
  }*/
  hit=num;
  root.render(<App/>);
}

function addWicket(){
  /*if(wicket<10){
    wicket+=1;
    ballWiseRes.push("W");
    root.render(<App/>);
  }*/
  hit="W";
  root.render(<App/>);
}

const ScoreButtons = () => (
  <div>
    <button onClick={() => addScore(0)}>0</button>
    <button onClick={() => addScore(1)}>1</button>
    <button onClick={() => addScore(2)}>2</button>
    <button onClick={() => addScore(3)}>3</button>
    <button onClick={() => addScore(4)}>4</button>
    <button onClick={() => addScore(5)}>5</button>
    <button onClick={() => addScore(6)}>6</button>
    <button onClick={addWicket}>wicket</button>
  </div>
)

const Result = ()=>(
  <div>
    {ballWiseRes.map((res,index) =>
      <>
      {index %6 === 0? <br/>:null}
      <span key={index}>{res===0 ? <strong>.</strong> :res}</span>&nbsp;&nbsp;&nbsp;
      </>
    )}
  </div>
)

function handleSubmit(event){
  event.preventDefault();

  if(hit == "W"){
    wicket+=1;
  }
  else{
    score+=hit;
  }
  
  ballWiseRes.unshift(
    //<span>{hit}{","}{inputRef.current.value}</span>
    <span>{`${hit}, ${inputRef.current.value}`}</span>
  );

  hit=0;
  inputRef.current.value="";
  root.render(<App/>);
}

const Form =() =>(
  <form onSubmit={handleSubmit}>
    <input value={hit}/>
    <input ref={inputRef} placeholder='Comment'/>
    <button>Submit</button>
  </form>
)

function App() {

  return (
    <div className="App">
      <h1>Score Keeper</h1>
      <h2>score {score}/{wicket} </h2>
      <ScoreButtons/>
      {/* <Result/> */}
      <Form/>
      <hr/>
      {ballWiseRes.map((res,index) => (
        <p key={index}>{res}</p>
      ))}
    </div>
  );
}

export default App;
