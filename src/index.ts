import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import "reflect-metadata";
import { buildSchema } from "type-graphql";
import * as dotenv from "dotenv";
import { CountryResolver } from "./resolver/country.resolver";
import { dataSource } from "./config/db";

const port: number = 3001;

const start = async () => {
    dotenv.config();
    await dataSource.initialize();

    const schema = await buildSchema({
        resolvers: [
            CountryResolver
        ],
        validate: { forbidUnknownValues: false },
    });

    const server = new ApolloServer({
        schema,
    });

    try {
        const { url } = await startStandaloneServer(server, {
            listen: { port: 4000 },
        });
    } catch (err) {
        console.error("Error starting the server");
    }
};

void start();
