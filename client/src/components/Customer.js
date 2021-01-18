import React from 'react';
// import -> 특정 라이브러리 불러오기
// react component 라이브러리를 사용하기 위해서 import
// 다른 것에서 이거 사용하기 위해서 export 

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render(){
        return (
            <TableRow>
                <TableCell> {this.props.id} </TableCell>
                <TableCell> <img src={this.props.image} alt="profile"/> </TableCell>
                {/* <img src={this.props.image + '/images/me.png'} alt="profile"/> */}
                <TableCell> {this.props.name} </TableCell>
                <TableCell> {this.props.birthday} </TableCell>
                <TableCell> {this.props.gender} </TableCell>
                <TableCell> {this.props.job} </TableCell>
            </TableRow>
        )
    }
}
// customer 클래스는 react의 component 형태로 작성 된 클래스
// App.js로 간다 슝


// data 출력할때는 프롭스 이용

export default Customer;
// 내보내기