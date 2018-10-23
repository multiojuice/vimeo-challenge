import styled from 'styled-components';

export const Arrow = styled.div`
    margin: 100px 20px;
    font-weight: 900;
    cursor: pointer;
    color: black;
    font-size: 96px;
    :hover {
        color: lightblue;
    }
    @media (max-width: 700px) {
        margin: 10px;
    }
`;

export const CarouselDiv = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`;