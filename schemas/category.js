export default {
    name: "category",
    title: "Category",
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type:"string",
        },
        {
            name: 'about',
            titile: 'ABout',
            type:'string'
        },
        {
            name: 'bannerImage',
            title: "BannerImage",
            type: "image",
            options: {
                hotspot:true
            }
        },
        {
            name: "pins",
            title: 'Pins',
            type: 'array',
            of: [{ type: 'collectionItem' }]
        },
    ]
}