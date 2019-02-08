const client = new DirectusSDK();
client.login({
    url: "http://localhost/directus",
    project: "_",
    email: "venkateshwar@divami.com",
    password: "admin123"
});

client.getItems("blogs")
    .then(data => console.log(data))