import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
    type: "sqlite",
    database: "db.sqlite3",
    entities: ["src/entity/*{.ts,.js}"],
    migrations: ["src/migration/*{.ts,.js}"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
        entitiesDir: "src/entity",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber",
    },
    synchronize: true,
};

export default connectionOptions;