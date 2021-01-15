import React from 'react';
// import -> 특정 라이브러리 불러오기
// react component 라이브러리를 사용하기 위해서 import
// 다른 것에서 이거 사용하기 위해서 export 

class Customer extends React.Component {
    render(){
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}
// customer 클래스는 react의 component 형태로 작성 된 클래스
// App.js로 간다 슝



// data 출력할때는 프롭스 이용

export default Customer;
// 내보내기