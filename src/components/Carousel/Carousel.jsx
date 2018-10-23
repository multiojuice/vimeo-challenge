import React, { Component } from 'react';
import {
    Arrow,
    CarouselDiv
} from './StyledComponents';
import CarouselItem from '../CarouselItem';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            items: []
        }
    }

    componentDidMount() {
        const items = this.props.items.map((item, index) => {
            return <CarouselItem 
                        key={index}
                        {...item}
                    />
        })
        this.setState({items});
    }

    changeIndex = (event) => {
        const {index, items} = this.state;
        if (event.target.name === 'increment') {
            this.setState({index: (index + 1 >= items.length ? 0 : index + 1)});
        } else {
            this.setState({index: (index - 1 < 0 ? items.length - 1 : index - 1)});
        }
    }

    render() {
        const {items, index} = this.state;
        return (
            <CarouselDiv>
                <Arrow onClick={this.changeIndex} name="increment"/>
                {items[index]}
                <Arrow onClick={this.changeIndex} name="decrement"/>
            </CarouselDiv>
        );
    }
}

export default Carousel;