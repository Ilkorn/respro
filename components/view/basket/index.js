import styled from 'styled-components';

import { View } from '../../pure';
import { ListFromBasket } from '../../list';

const Wrapper = styled(View)`
    padding: 20px 16px;
`;

const BasketView = ({ title, description }) => (
    <Wrapper>
        <ListFromBasket />
    </Wrapper>
);

export default BasketView;
