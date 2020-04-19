import {Entity, PrimaryKey, Property} from "mikro-orm";

@Entity()
export class FooEntity {
    @PrimaryKey()
    id!: number;

    @Property()
    stringProperty!: string;

    @Property({nullable: true})
    nullableStringProperty?: string;

    @Property()
    booleanProperty!: boolean;

    @Property({nullable: true})
    nullableBooleanProperty?: boolean;

    @Property()
    numberProperty!: number;

    @Property({nullable: true})
    nullableNumberProperty?: number;
}
