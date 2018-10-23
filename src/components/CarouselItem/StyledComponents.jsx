import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ThumbnailImg = styled.img`
    height: 200px;
    width: 100px;
`;

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    margin-top: 30px;
    color: white;
    font-size: 32px;
    font-weight: 500;
`;

export const Description = styled.div`
    margin-top: 20px;
    color: grey;
    font-size: 22px;
`;

export const BuyNowButton = styled.button`
    padding: 10px 15px;
    font-weight: 500;
    background-color: CornFlowerBlue;
    border: none;
    border-radius: 1px;
`;

export const WatchTrailerButton = styled.button`
    padding: 10px 15px;
    font-weight: 500;
    background-color: inherit;
    border: white 2px solid;
    border-radius: 1px;
`;
