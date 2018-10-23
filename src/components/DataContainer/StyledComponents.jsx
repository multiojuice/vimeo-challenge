import styled from 'styled-components';
import { ORIENTATION_CONSTANTS } from '../../App';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.orientation === ORIENTATION_CONSTANTS.LEFT ? "row-reverse" : "row"};
    justify-content: center;
    align-items: center
`;

export const ThumbnailImg = styled.img`
    max-width: 400px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
`;

export const Description = styled.div`
    font-size: 16px;
`;