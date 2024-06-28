const express = require('express');
const { ApolloServer } = require('apollo-server-express'); // Correct import
const { typeDefs, resolvers } = require('./schemas');
const path = require('path');
const mongoose = require('mongoose');
// Connect to MongoDB database
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
// Create an instance of Express
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Middleware
const startApolloServer = async () => {
    await server.start();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use('/graphql', server.getMiddleware()); // Use server.getMiddleware() instead of expressMiddleware(server)
    // if we're in production, serve client/dist as static assets
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    }
    // Wait for MongoDB connection to open before starting the server
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
    });
};
startApolloServer();