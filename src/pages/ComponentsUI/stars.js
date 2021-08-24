import React from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';

// ReactDOM.render(<Rate allowHalf defaultValue={2.5} />, document.getElementById('container'));

export default function Stars(){
  return(
    <>
      <Rate allowHalf defaultValue={2.5} />
    </>
  );
}