export default {
    name: "save",
    title: 'Save',
    type: 'document',
    fields: [
        {
            name: 'item',
            title: "Item",
            type: "reference",
            to:[{type:'pin'}]
        },
        {
            name: 'pinId',
            title: "pinId",
            type: "string",
        },
    ]
}