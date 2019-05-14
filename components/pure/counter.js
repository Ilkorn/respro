import styled from 'styled-components';

import theme from '../../utils/theme';

const View = styled.div`
    font-family: ${theme.fontFamily};
    font-size: ${theme.fontSize.m};
    box-sizing: border-box;
`;

const Wrapper = styled(View)`
    width: 144px;
    height: 48px;
`;

const DefaultState = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 144px;
    height: 48px;
    background-color: #EFF1F5;
    border-radius: 24px;
    cursor: pointer;
    user-select: none;
`;

const ButtonState = styled(View)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ButtonCircle = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    background-color: #EFF1F5;
    border-radius: 24px;
    cursor: pointer;
    user-select: none;
`;

const Counter = styled.span`
    font-family: ${theme.fontFamily};
    font-size: 24px;
    user-select: none;
`;

const getButtonState = ({ id, count, sub, add, availability = true }) => {
    if (availability) {
        if (!count) {
            return (<DefaultState onClick={() => add(id)}>В корзину</DefaultState>);
        } else {
            return (
                <ButtonState>
                    <ButtonCircle onClick={() => sub(id)}>
                        <img src="/static/img/icons/ic-minus-32.svg" />
                    </ButtonCircle>
                    <Counter>{count}</Counter>
                    <ButtonCircle onClick={() => add(id)}>
                        <img src="/static/img/icons/ic-plus-32.svg" />
                    </ButtonCircle>
                </ButtonState>
            );
        }
    } else {
        return (<DefaultState>Нет в наличии</DefaultState>);
    }
};

export default (props) => (
    <Wrapper>
        {getButtonState(props)}
    </Wrapper>
);
