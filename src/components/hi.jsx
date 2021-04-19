import React from 'react';

export class Hi extends React.Component{
    render() {
        return (<h1>{`Hi from ${this.props.name}`}</h1>);
    }
}