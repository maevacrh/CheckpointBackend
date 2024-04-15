
import { ObjectType, Field } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@ObjectType()
@Entity()
export class Country extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Field()
    code: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    emoji: string;

    @Column()
    @Field()
    continent: string;
}