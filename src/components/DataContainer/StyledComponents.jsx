import styled from 'styled-components';
import { ORIENTATION_CONSTANTS } from '../../App';

export const Wrapper = styled.div`
    margin: 40px 0;
    display: flex;
    flex-direction: ${props => props.orientation === ORIENTATION_CONSTANTS.RIGHT ? "row-reverse" : "row"};
    justify-content: center;
    align-items: center;
    @media (max-width: 1300px) {
        flex-direction: column;
    }

    @media (max-width: 700px) {
        width: 85%;
        margin: 20px 0;
    }
`;

export const ThumbnailImg = styled.img`
    max-width: 600px;
    @media (max-width: 700px) {
        width: 90%;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px;
    max-width: 600px;
    @media (max-width: 700px) {
        width: 90%;
        margin: 0;
    }
`;

export const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.textColor};
`;

export const Description = styled.div`
    font-size: 16px;
    color: ${props => props.textColor};
`;