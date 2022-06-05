export default {
    name: "collectionItem",
    title: 'CollectionItem',
    type: 'document',
    fields: [
        {
            name: 'item',
            title: "Item",
            type: "reference",
            to:[{type:'pin'}]
        },
        {
            name: 'userId',
            title: "UserID",
            type: "string",
        },
    ]
}