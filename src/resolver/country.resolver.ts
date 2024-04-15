import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Country } from '../entities/Country';

@Resolver()
export class CountryResolver {
    @Query(() => [Country])
    async countries(): Promise<Country[]> {
        return await Country.find();
    }

    @Query(() => Country, { nullable: true })
    async countryByCode(@Arg("code") code: string): Promise<Country | null> {
        return await Country.findOne({ where: { code } });
    }

    @Mutation(() => Country)
    async addCountry(
        @Arg("code") code: string,
        @Arg("name") name: string,
        @Arg("emoji") emoji: string,
        @Arg("continent") continent: string
    ): Promise<Country> {
        const country = await Country.create({ code, name, emoji, continent }).save();
        return country;
    }

    @Query(() => [Country])
    async countriesByContinent(@Arg("continent") continent: string): Promise<Country[]> {
        return await Country.find({ where: { continent } });
    }
}