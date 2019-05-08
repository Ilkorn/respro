import styled from 'styled-components';

import { View, Title, Description } from '../../pure';
import { ListWithFilter } from '../../list';
import viewContainer from './viewContainer';

const Wrapper = styled(View)`
    padding: 20px 16px;
`;

const ListView = ({ title, description }) => (
    <Wrapper>
        <Title>{ title }</Title>
        <Description>{ description }</Description>
        <ListWithFilter />
    </Wrapper>
);

export default viewContainer(ListView);
