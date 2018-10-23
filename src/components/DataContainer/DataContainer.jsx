import React from 'react';
import {
    Wrapper,
    ThumbnailImg,
    TextContainer,
    Title,
    Description
} from './StyledComponents';

const DataContainer = ({imageUrl, description, orientation, title}) => {
    return (
        <Wrapper orientation={orientation}>
            <ThumbnailImg src={imageUrl}/>
            <TextContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TextContainer>
        </Wrapper>
    );
}

export default DataContainer;