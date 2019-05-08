import styled from 'styled-components';

import overlayContainer from './overlayConatainer';
import { View } from '../pure';

export const Overlay = styled(View)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: .5;
    background: ${props => props.theme.color.black};
    z-index: ${props => props.theme.zIndex.m}
`;



export default overlayContainer(Overlay);
