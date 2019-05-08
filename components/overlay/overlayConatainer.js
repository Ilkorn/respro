import { connect } from 'react-redux';
import { compose, branch, renderNothing } from 'recompose';

export const container = compose(
    connect(state => ({ isShowen: state.router.menu })),
    branch(({ isShowen }) => !isShowen, renderNothing)
);

export default container;
