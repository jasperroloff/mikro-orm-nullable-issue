import 'reflect-metadata';
import {MikroORM, ReflectMetadataProvider} from "mikro-orm";
import {FooEntity} from "./FooEntity";

async function run() {
    const orm = await MikroORM.init({
        entities: [FooEntity],
        dbName: 'test',
        type: 'mariadb', // works also with mysql; other ones not tried
        metadataProvider: ReflectMetadataProvider, // works also with TsMorph; JS not tried
        cache: {enabled: false},
        // debug: true,
    });

    // ensure the database is up-to-date
    await orm.getSchemaGenerator().updateSchema();

    // the following code shouldn't generate a schema update because the database is up-to-date already
    console.log(await orm.getSchemaGenerator().getUpdateSchemaSQL());

    await orm.close();
}

run();
