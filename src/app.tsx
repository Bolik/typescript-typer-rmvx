import React, { define } from 'react-mvx'

import { SimpleItem } from './models'
import { SimpleRow } from './item'

@define export
    class App extends React.Component {
    static props = {
        items: SimpleItem.Collection
    }
    render(this: App) {
        const { items } = this.props
        return (
            <>
            {items.map(item => (
                <SimpleRow item={item} />
            ))}
            </>
        )
    }
}
