// GameBoard.js
import React, {useEffect,useState} from 'react';
export default function GameBoard(){
  const [board,setBoard]=useState([]);
  useEffect(()=>{
    const es=new EventSource('http://localhost:3001/events');
    es.onmessage=e=>setBoard(JSON.parse(e.data));
  },[]);
  return <div>{/* render board grid */}</div>;
}