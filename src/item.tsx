import React, { define } from 'react-mvx'

import { SimpleItem } from './models'

@define export
    class SimpleRow extends React.Component {
    static props = {
        item: SimpleItem
    }
    render() {
        const { item } = this.props
        return (
            <p>{item.pos}</p>
        )
    }
}
