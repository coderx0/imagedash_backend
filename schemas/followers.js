export default {
    name: "followers",
    title: 'Followers',
    type: 'document',
    fields: [
        {
            name: 'followedBy',
            title: "followedBy",
            type: "postedBy",
        },
        {
            name: 'userId',
            title: "UserID",
            type: "string",
        },
    ]
}