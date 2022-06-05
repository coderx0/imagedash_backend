export default {
    name: "pinCollection",
    title: "PinCollection",
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type:"string",
        },
        {
            name: 'about',
            title: 'About',
            type:"string",
        },
        {
            name: 'isPrivate',
            title: 'IsPrivate',
            type:'boolean'
        },
        {
            name: 'category',
            title: "Category",
            type:"string"
        },
        {
            name: "pins",
            title: 'Pins',
            type: 'array',
            of: [{ type: 'collectionItem' }]
        },
        {
            name: 'userId',
            title: "UserID",
            type:"string"
        },
        {
            name: 'postedBy',
            title: "PostedBy",
            type:"postedBy"
        },
        {
            name: 'save',
            title: "Save",
            type: "array",
            of: [{ type: 'save' }]
        },
        {
            name: 'likes',
            title: 'Likes',
            type: 'array',
            of:[{type:'likes'}]
        },
        {
            name: 'comments',
            title: "Comments",
            type: "array",
            of: [{ type: 'comment' }]
        },
    ]
}