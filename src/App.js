import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import {withStyles} from '@material-ui/core/styles';
// css

const style = thme => ({
  root : {
    width : '100%',
    marginTop : thme.spacing.unit*3,
    overflowX : "auto"
    // x축으로 오버플로우 가능
  },
  table : {
    minWidth : 1080
    // 화면 크기 1080 고정 -> 넘어가면 스크롤바 생김
  }
})

const c = [
    {
    'id' : 1,
    'image' : 'http://placeimg.com/100/100/1',
    'name' : '최혜민',
    'birthday' : '000323',
    'gender' : '여자',
    'job' : '백수이고 싶지만 취직하고 싶은 백수'
  },
  {
    'id' : 2,
    'image' : 'http://placeimg.com/100/100/2',
    'name' : '최형우',
    'birthday' : '070607',
    'gender' : '남자',
    'job' : '한 손에 흑염룡이 잠든 중2'
  },
  {
    'id' : 3,
    'image' : 'http://placeimg.com/100/100/3',
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
  
  const { classes } = this.props;

    return(
      <Paper className = { classes.root }>
        <Table className = {classes.table }>
          <TableHead>
            <TableRow>
              <TableCell> 번호 </TableCell>
            <TableCell> 이미지 </TableCell>
            <TableCell> 이름 </TableCell>
            <TableCell> 생년월일 </TableCell>
            <TableCell> 성별 </TableCell>
            <TableCell> 직업 </TableCell>
            </TableRow>
            
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
        

        
      </Paper>
    );
  }
}
// 경로

// Component -> 웹 문서에서 보여주기 위한 단위

export default withStyles(style)(App);