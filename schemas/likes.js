export default {
    name: "likes",
    title: 'Likes',
    type: 'document',
    fields: [
        {
            name: 'likedBy',
            title: "LikedBy",
            type: "postedBy",
        },
        {
            name: 'userId',
            title: "UserID",
            type: "string",
        },
    ]
}