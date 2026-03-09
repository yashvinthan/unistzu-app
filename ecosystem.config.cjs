module.exports = {
    apps: [
        {
            name: "unistzu-app",
            script: "node_modules/.bin/serve",
            args: "-s dist -l 3000",
            env: {
                NODE_ENV: "production"
            }
        }
    ]
};
