import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const c = {
  'id' : '1',
  'image' : 'http://placeimg.com/500/500/any',
  'name' : '최혜민',
  'birthday' : '000323',
  'gender' : '여자',
  'job' : '백수이고 싶지만 취직하고 싶은 백수'
}
// customer 라는 변수를 만듦
// 위의 링크는 랜덤으로 image 보여주는 사이트 / 64/64/는 이미지 사이즈

class App extends Component {
  render() {
    return(
      <Customer
        id = {c.id}
        image = {c.image}
        name = {c.name}
        birthday = {c.birthday}
        gender = {c.gender}
        job = {c.job}
      />
    );
  }
}
// 경로

// Component -> 웹 문서에서 보여주기 위한 단위

export default App;