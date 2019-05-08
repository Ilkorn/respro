import ListItem from './listItem';

export default ({ items = [], ...props }) => (
    <div style={{height: '100%', overflow: 'scroll', paddingBottom: '60px'}}>
        {
            items && items.map(
                (item, key) => (<ListItem item={item} key={key} {...props} />)
            )
        }
    </div>
);
