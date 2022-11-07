import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';
import './index.css'


ReactDOM.render(
    <>
    <h1 className='heading'>Top 6 Netflix Series</h1>
    {Sdata.map((val) =>{
      return(
        <Card sname = {val.sname} 
        imgsrc = {val.imgsrc} 
        title = {val.title}
        link = {val.link} />
      )
    })}
</>, document.getElementById("root"));
