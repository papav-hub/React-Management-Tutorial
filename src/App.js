import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const c = {
  'name' : '최혜민',
  'birthday' : '000323',
  'gender' : '여자',
  'job' : '백수'
}
// customer 라는 변수를 만듦

class App extends Component {
  render() {
    return(
      <Customer
        name = {c.name}
        birthday = {c.birthday}
        gender = {c.gender}
        job = {c.job}
      />
    );
  }
}

// Component -> 웹 문서에서 보여주기 위한 단위

export default App;