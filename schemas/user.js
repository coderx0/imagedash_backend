export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'userName',
            title: 'UserName',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string'
        },
        {
            name: 'bannerImage',
            title: 'BannerImage',
            type:'string'
        },
        {
            name: "email",
            title: "Email",
            type:"string"
        },
        {
            name: 'about',
            title: 'About',
            type: 'string'
        },
        {
            name: 'password',
            title: 'Password',
            type:'string'
        },
        {
            name: 'uploads',
            title: 'Uploads',
            type: 'array',
            of:[{type:'uploadedPin'}]
        },
        {
            name: 'totalLikes',
            title: "TotalLikes",
            type: 'number',
            initialValue:0
        },
        {
            name: 'save',
            title: "Save",
            type: "array",
            of: [{ type: 'save' }]
        },
        {
            name: 'followers',
            title: "Followers",
            type: "array",
            of: [{ type: 'followers' }]
        },
        {
            name: 'following',
            title: "Following",
            type: "array",
            of: [{ type: 'following' }]
        },

    ]
}