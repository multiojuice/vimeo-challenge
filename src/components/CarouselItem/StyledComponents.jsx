import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 900px;
    @media (max-width: 1100px) {
        max-width: 80%;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`;

export const ThumbnailImg = styled.img`
    height: 400px;
    width: 300px;
    @media (max-width: 700px) {
        height: 80%;
        width: 60%
    }
`;

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 40px;
    @media (max-width: 700px) {
        margin: auto;
        align-items: center;
    }
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
    @media (max-width: 700px) {
        width: auto;
        word-break: break-all;
    }
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
