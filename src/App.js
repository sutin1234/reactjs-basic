
import React from 'react';
import './App.css';
import Contact from './Contact';
import './myStyle.css';
import ServiceClassComponent from './ServiceClassComponent';
import ServiceFunctionalComponent from './ServiceFunctionalComponent';

const myName = 'Sutin injitt'
const mysalary = 500000
const myWifeSalary = 35000

function App() {
  return (
    <>
      <div className="App">
        <div>เนื้อหาส่วนที่ 1</div>
        <div>เนื้อหาส่วนที่ 2</div>
        <div>ชื่อ {myName}</div>
        <div>รายได้เรา {mysalary}</div>
        <div>รายได้ภรรยา {myWifeSalary}</div>
        <div>
          รวม <span style={{ color: 'red' }}>
            {mysalary + myWifeSalary}</span>
        </div>
        <Contact />
        <ServiceClassComponent />
        <ServiceFunctionalComponent />
      </div>
    </>
  );
}

export default App;
