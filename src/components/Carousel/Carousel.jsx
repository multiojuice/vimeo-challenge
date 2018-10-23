import React, { Component } from 'react';
import {
    Arrow,
    CarouselDiv,
    CarouselBackground,
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
        console.log(event.target.id)
        if (event.target.id === 'increment') {
            this.setState({index: (index + 1 >= items.length ? 0 : index + 1)});
        } else {
            this.setState({index: (index - 1 < 0 ? items.length - 1 : index - 1)});
        }
    }

    render() {
        const {items, index} = this.state;
        return (
            <div>
                <CarouselBackground imageUrl={this.props.items[index].imageUrl} />
                <CarouselDiv>
                    <Arrow onClick={this.changeIndex} id="decrement">{`<`}</Arrow>
                    {items[index]}
                    <Arrow onClick={this.changeIndex} id="increment">{`>`}</Arrow>
                </CarouselDiv>
            </div>
        );
    }
}

export default Carousel;