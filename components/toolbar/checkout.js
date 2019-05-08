import styled from 'styled-components';

import checkoutContainer from './checkoutContainer';
import { View } from '../pure';


export const CheckoutWrapper = styled(View)`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px 0 15px;
    top: -31px;
    left: calc(50% - 108px);
    width: 216px;
    height: 56px;

    border-radius: 62px;
    background-color: ${props => props.theme.color.carrot};
    color: ${props => props.theme.color.white};
`;

const Caption = styled(View)`
    font-size: 21px;
    color: ${props => props.theme.color.white};
`;

export const Basket = ({ totalAmount, handleConfirm }) => (
    <CheckoutWrapper onClick={() => handleConfirm()}>
        <View>{totalAmount.toFixed(2)} р.</View>
        <Caption>Оформить</Caption>
    </CheckoutWrapper>
);

export default checkoutContainer(Basket)
