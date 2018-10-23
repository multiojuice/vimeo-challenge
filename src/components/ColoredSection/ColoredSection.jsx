import React from 'react';
import {
    SectionWrapper
} from './StyledComponents';
import DataContainer from '../DataContainer';

const ColoredSection = ({color, data}) => {
    
    const dataComponents = data.map(item => 
        <DataContainer {...item}/>
    );

    return (
        <SectionWrapper color={color}>
            {dataComponents}
        </SectionWrapper>
    );
}

export default ColoredSection;