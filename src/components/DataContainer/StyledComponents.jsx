import styled from 'styled-components';
import { ORIENTATION_CONSTANTS } from '../../App';

export const Wrapper = styled.div`
    margin: 40px 0;
    display: flex;
    flex-direction: ${props => props.orientation === ORIENTATION_CONSTANTS.RIGHT ? "row-reverse" : "row"};
    justify-content: center;
    align-items: center
`;

export const ThumbnailImg = styled.img`
    max-width: 600px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 40px;
    max-width: 600px;
`;

export const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
`;

export const Description = styled.div`
    font-size: 16px;
`;