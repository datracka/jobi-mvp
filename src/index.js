import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import Schema from './schema.js';

const PORT = process.env.PORT;
console.log(PORT);

const app = express();

// graphql endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: Schema }));

// graphiql
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () => `App listening in port ${PORT}`);
