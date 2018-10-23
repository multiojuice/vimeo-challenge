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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const CarouselBackground = styled.div`
    background-image: url("https://i.vimeocdn.com/video/595198868_505x160.jpg");
    
    /* Add the blur effect */
    filter: blur(8px);
    -webkit-filter: blur(8px);

    /* Full height */
    height: 100vh; 
    width: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    postion: absolute;
    top: 0;
    left: 0;
`;