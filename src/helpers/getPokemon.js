import pokeApi from '../api/PokeApi';


const getPokemons = () => {
    const pokeArray = Array.from(Array(650));

    return pokeArray.map((_,index) => index+1);
}

const getPokemonData = async ( [n1,n2,n3,n4] = [] ) =>{
    
    //WE GET FULL DATA FROM FOUR POKEMON
    const promiseArr = [
        pokeApi.get(`/${n1}`),
        pokeApi.get(`/${n2}`),
        pokeApi.get(`/${n3}`),
        pokeApi.get(`/${n4}`),
    ];

    //MAKE THE PETITIONS
    const [p1,p2,p3,p4] = await Promise.all(promiseArr).then( (result) => {
            console.log(result.data);
        })
            .catch( (error) => {
                return error;
            });
    
    //RETURN ONLY THE DATA THAT WE NEED
    return [
        {name: p1.data.name, id: p1.data.id, type: p1.data.types[0].type.name},
        {name: p2.data.name, id: p2.data.id, type: p2.data.types[0].type.name},
        {name: p3.data.name, id: p3.data.id, type: p3.data.types[0].type.name},
        {name: p4.data.name, id: p4.data.id, type: p4.data.types[0].type.name},
    ];
}


const getPokemonOptions = async() => {
    const mixedPokemons = getPokemons().sort( ()=> Math.random() - 0.5);

    return await getPokemonData(mixedPokemons.splice(0,4));
    
}

export default getPokemonOptions;