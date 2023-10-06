const app = require('../src/app.js');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {
    describe( 'GET /rickandmorty/character/:id', () => {
        it( 'Responde con status: 200', async() => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it( 'Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async() => {
            const response = (await agent.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty("id")
            expect(response).toHaveProperty("name")
            expect(response).toHaveProperty("species")
            expect(response).toHaveProperty("gender")
            expect(response).toHaveProperty("status")
            expect(response).toHaveProperty("origin")
            expect(response).toHaveProperty("image")
        })

        it( 'Si hay un error responde con status: 500', async() => {
            await agent.get('/rickandmorty/character/9999999').expect(500)
        })
    })
})

describe("GET /rickandmorty/login", () => {
    it('email y password correctas', async () => {
        const response = (await agent.get('/rickandmorty/login?email=""&password=""')).body;
        expect(response.access).toEqual(true)
    })
})

describe("GET /rickandmorty/login", () => {
    it('email y password incorrectas', async () => {
        const response = (await agent.get('/rickandmorty/login?email=Gabriel@gabrm&password=1234567')).body;
        expect(response.access).toEqual(false)
    })
})

describe("POST /rickandmorty/fav", () => {
    const character1 = {id:'1', name: 'uno'}
    const character2 = {id:'2', name: 'dos'}
    it('Lo que envíes por body debe ser devuelto en un arreglo', async () => {
        const response = (await agent.post('/rickandmorty/fav').send(character1)).body;
        expect(response).toContainEqual(character1)
    })
    it('Lo que envíes por body debe ser devuelto en dos arreglo', async () => {
        const response = (await agent.post('/rickandmorty/fav').send(character2)).body;
        expect(response).toContainEqual(character1)
        expect(response).toContainEqual(character2)
    })
})

describe("DELETE /rickandmorty/fav/:id", () => {
    const character1 = {id:'1', name: 'uno'}
    const character2 = {id:'2', name: 'dos'}

    it( 'devuelva esta ruta en el caso de que no haya ningún personaje con el ID que envías', async() => {
        const response = (await agent.delete('/rickandmorty/fav/000000')).body;
        expect(response).toContainEqual(character1)
        expect(response).toContainEqual(character2)
    })
    it('elimina correctamente al personaje', async() => {
        const response = (await agent.delete('/rickandmorty/fav/1')).body;
        expect(response).not.toContainEqual(character1)
    })
})