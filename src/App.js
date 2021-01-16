import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const c = [
  {
  'id' : 1,
  'image' : 'http://placeimg.com/300/300/1',
  'name' : '최혜민',
  'birthday' : '000323',
  'gender' : '여자',
  'job' : '백수이고 싶지만 취직하고 싶은 백수'
},
{
  'id' : 2,
  'image' : 'http://placeimg.com/300/300/2',
  'name' : '최형우',
  'birthday' : '070607',
  'gender' : '남자',
  'job' : '한 손에 흑염룡이 잠든 중2'
},
{
  'id' : 3,
  'image' : 'http://placeimg.com/300/300/3',
  'name' : '최준혁',
  'birthday' : '000305',
  'gender' : '남자',
  'job' : '곧 군대가는 멍청이'
}
]
// customer 라는 변수를 만듦
// 위의 링크는 랜덤으로 image 보여주는 사이트 / 64/64/는 이미지 사이즈

class App extends Component {
  render() {
    return(
      <div>
        {
          c.map(cs => {
            return (
              <Customer
                key = {cs.id}
                // id값을 key로 사용하겠다. (map 함수 사용할때 사용)
                id = {cs.id}
                image = {cs.image}
                name = {cs.name}
                birthday = {cs.birthday}
                gender = {cs.gender}
                job = {cs.job}
              />
            )
          })
        }
      </div>
    );
  }
}
// 경로

// Component -> 웹 문서에서 보여주기 위한 단위

export default App;