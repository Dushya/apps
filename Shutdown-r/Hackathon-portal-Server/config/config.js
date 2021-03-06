module.exports = {
    //MongoDB configuration
    development: {
        db: 'mongodb://localhost:27017/Portal',
        app: {
            name: 'Portal'
        }
    },
    production: {
        db: 'mongodb://<username>:<password>@ds157325.mlab.com:57325/graphql-api',
        app: {
            name: 'graphql'
        }
    }
};