import styled from 'styled-components';

import basketContainer from './basketContainer';
import { View, Element } from '../pure';
import theme from '../../utils/theme';

export const BasketWrapper = styled(View)`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  0 24px 0 15px;
    top: -31px;
    left: calc(50% - 108px);
    width: 216px;
    height: 56px;

    border-radius: 62px;
    background-color: ${props => props.disabled ? theme.color.carrotLight : theme.color.carrot};
    color: white;
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`;

const Caption = styled(View)`
    font-size: 21px;
    color: ${theme.color.white};
`;

const IconWrapper = styled(View)`
    position: relative;
`;

const IconText = styled(Element)`
    background: ${theme.color.white};
    color: ${theme.color.carrot};
    position: absolute;
    right: -4px;
    top: -4px;
    height: 18px;
    width: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 50%;
    border: 2px solid ${props => props.disabled ? theme.color.carrotLight : theme.color.carrot};
`;

export const Basket = ({ itemsCount, disabled, handleOpenBasket }) => (
    <BasketWrapper disabled={disabled} onClick={() => handleOpenBasket()}>
        <IconWrapper>
            <img src="/static/img/icons/ic-basket.svg" />
            <IconText disabled={disabled}>{itemsCount}</IconText>
        </IconWrapper>
        <Caption>Корзина</Caption>
    </BasketWrapper>
);

export default basketContainer(Basket)
