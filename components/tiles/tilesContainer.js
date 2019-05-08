import { withProps, compose, branch, renderNothing } from 'recompose';
import { connect } from 'react-redux';
import { actions as routerActions } from '../../data/router';
import { actions as filterActions } from '../../data/filter';

export default compose(
    connect(
        state => ({
            isMenuOpen: state.router.menu
        }),
        dispatch => ({
            handleViewFilteredList: (filter) => {
                dispatch(filterActions.setFilter({ type: 'mealType', value: [filter] }));
                dispatch(routerActions.changeView('list'));
                dispatch(routerActions.openMenu(false));
            }
        })
    ),
    branch(
        ({ isMenuOpen }) => !isMenuOpen,
        renderNothing
    ),
    withProps(({ handleViewFilteredList }) => ({
        items: [
            {
                title: 'Завтрак',
                onClick: () => handleViewFilteredList('#breakfast'),
                icon: (<img src="/static/img/icons/menu/ic-breakfast.svg" />)
            },
            {
                title: 'Обед',
                onClick: () => handleViewFilteredList('#lunch'),
                icon: (<img src="/static/img/icons/menu/ic-lunch.svg" />)
            },
            {
                title: 'Ужин',
                onClick: () => handleViewFilteredList('#dinner'),
                icon: (<img src="/static/img/icons/menu/ic-dinner.svg" />)
            },
            {
                title: 'Десерт',
                onClick: () => handleViewFilteredList('#dessert'),
                icon: (<img src="/static/img/icons/menu/ic-dessert.svg" />)
            },
            {
                title: 'Напитки',
                onClick: () => handleViewFilteredList('#drinks'),
                icon: (<img src="/static/img/icons/menu/ic-drinks.svg" />)
            }
        ]
    }))
);
