import React from 'react';
import {
    Wrapper,
    ThumbnailImg,
    InformationContainer,
    Title,
    Description,
    BuyNowButton,
    WatchTrailerButton
} from './StyledComponents';

const CarouselItem = ({imageUrl, title, description}) => {
    return (
        <Wrapper>
            <ThumbnailImg src={imageUrl}/>
            <InformationContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Wrapper>
                    <BuyNowButton>Buy Now</BuyNowButton>
                    <WatchTrailerButton>Watch Trailer</WatchTrailerButton>
                </Wrapper>
            </InformationContainer>
        </Wrapper>
    )
}

export default CarouselItem;