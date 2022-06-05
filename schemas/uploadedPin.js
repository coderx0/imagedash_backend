export default {
    name: "uploadedPin",
    title: 'UploadedPin',
    type: 'document',
    fields: [
        {
            name: 'item',
            title: "Item",
            type: "reference",
            to:[{type:'pin'}]
        },
        {
            name: 'title',
            title: "Title",
            type: "string",
        },
    ]
}