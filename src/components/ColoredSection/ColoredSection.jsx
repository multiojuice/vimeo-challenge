import React from 'react';
import {
    SectionWrapper
} from './StyledComponents';
import DataContainer from '../DataContainer';

const ColoredSection = ({color1, color2, data}) => {
    
    const dataComponents = data.map(item => 
        <DataContainer key={item.title} {...item}/>
    );

    return (
        <SectionWrapper color1={color1} color2={color2}>
            {dataComponents}
        </SectionWrapper>
    );
}

export default ColoredSection;