
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';
export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon/${ this.id  }.jpg`;
    }


    constructor( 
        public readonly id: number, 
        public name: string,
        private readonly http: HttpAdapter
    ) {}

    scream() {
        console.log(`${ this.name.toLowerCase()} !!!`);
    }

    speak() {
        console.log(`${ this.name } ${ this.name }`);
    }

    async getMoves (): Promise<Move[]> {
        // const moves = 10;
        const data  = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);
        return data.moves;
    }
}
const pokeApiAxios = new PokeApiAdapter();

const pokeApiFetchAdapter = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, 'CHARMANDER', pokeApiAxios);

console.log(charmander.getMoves());

charmander.speak();
charmander.scream();
