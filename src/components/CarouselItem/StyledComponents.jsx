import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 900px;
`;

export const ThumbnailImg = styled.img`
    height: 400px;
    width: 300px;
`;

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 40px;
`;

export const Title = styled.div`
    margin-top: 10px;
    color: white;
    font-size: 32px;
    font-weight: 700;
`;

export const Description = styled.div`
    margin: 15px 0;
    color: grey;
    font-size: 22px;
`;

export const BuyNowButton = styled.button`
    padding: auto;
    font-weight: 700;
    background-color: CornFlowerBlue;
    border: none;
    border-radius: 4px;
    width: 80px;
    height: 40px;
    color: white;
    margin-right: 20px;
`;

export const WatchTrailerButton = styled.button`
    padding: auto;
    color: white;
    font-weight: 700;
    background-color: inherit;
    border: white 1px solid;
    border-radius: 4px;
    width: 80px;
    height: 40px;
`;
