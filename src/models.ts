import { Record, define, Collection } from 'type-r'


@define export
    class SimpleCollection extends Record.Collection {
    static comparator = x => x.pos
    toJSON() {
        return {}
    }
}


@define export
    class SimpleItem extends Record {
    static Collection = SimpleCollection
    static attributes = {
        pos: Number.has.value(0)
    }
}

const items = new SimpleItem.Collection()
items.push({ pos: 2 })
items.unshift({ pos: 3 })
