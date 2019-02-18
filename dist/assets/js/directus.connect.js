const client = new DirectusSDK({
    url: "http://localhost/directus-poc/public",
    project: "_",
    // email: "venkateshwar@divami.com",
    // password: "admin123",
    storage: window.localStorage
})
// .then(data => {
    client.getItems("articles")
        .then(data => console.log(data))
// });
