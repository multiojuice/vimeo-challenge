import React from 'react';
import {
    Wrapper,
    ThumbnailImg,
    TextContainer,
    Title,
    Description
} from './StyledComponents';

const DataContainer = ({imageUrl, description, orientation, title, textColor}) => {
    return (
        <Wrapper orientation={orientation}>
            <ThumbnailImg src={imageUrl}/>
            <TextContainer>
                <Title textColor={textColor}>{title}</Title>
                <Description textColor={textColor}>{description}</Description>
            </TextContainer>
        </Wrapper>
    );
}

export default DataContainer;