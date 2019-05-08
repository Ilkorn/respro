import styled from 'styled-components'

import { View } from '../pure'
import { default as Basket } from './basket';
import { default as Checkout } from './checkout';
import toolbarContainer from './toolbarContainer';

const ToolbarWrapper = styled(View)`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    height: 56px;
    padding: 0 20px;
    background-color: ${props => props.theme.color.white};
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
    z-index: ${props => props.theme.zIndex.xl};
`;

export const Toolbar = ({ viewName, handleToggleMenu }) => (
    <ToolbarWrapper>
        <img onClick={handleToggleMenu} src="/static/img/icons/ic-menu-32.svg" />
        <View></View>
        {
            viewName !== 'basket' &&
            <Basket/>
        }
        {
            viewName === 'basket' &&
            <Checkout />
        }
    </ToolbarWrapper>
);

export default toolbarContainer(Toolbar);
