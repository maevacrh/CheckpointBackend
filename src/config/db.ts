import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "checkpoints.db",
    entities: ["src/entities/*.ts"],
    logging: true,
    synchronize: true,
});