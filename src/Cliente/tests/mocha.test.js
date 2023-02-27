
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Testeo con Mocha |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import request from 'supertest';
import { expect } from 'chai';
import { logger } from '../Configuracion/logger.js';
import { RutaProducto } from '../Rutas/index.js';
// import { app } from './app.js';


//* SOLO TESTEO API PRODUCTOS
//? toEqual == to.equal == strictEqual
//? toBe == to.deep == deepStrictEqual 



describe('Prueba funcionalidad API REST Productos', () => {

    //* ( get x id: /:id || todos: / )
    it('Debería obtener un producto', async () => {
        const respuesta = await request(RutaProducto).get('/1')
        expect(respuesta.statusCode).toBe(200)
        expect(respuesta.body).to.deep.equal([1])
    })

    it('Debería obtener todos los productos', async () => {
        const respuesta = await request(RutaProducto).get('/')
        expect(respuesta.statusCode).toBe(200)
        expect(respuesta.body).to.deep.equal([1])
    })

    it('Debería crear x productos', async () => {
        const crearProducto = {
            "titulo": "Venture Runner 0474 Nike 6 Csi",
            "descripcion": "Zapatilla de marca nike",
            "precio": 40.000,
            "codigo": "653762376",
            "imagen": "https://http2.mlstatic.com/D_NQ_NP_613954-MLA51371562886_092022-O.webp",
            "stock": 54,
        }
        const respuesta = await request(RutaProducto).post('/').send({ crearProducto })
        expect(respuesta.statusCode).to.be(200)
        expect(respuesta.body).to.equal(`${productoCreado}, Producto/s creado/s con exito`)
        expect(respuesta.body).to.deep.equal([2])
    })

    it('Debería actualizar un producto', async () => {
        const actualizarProducto = {
            "titulo": "Venture Runner 0474 Nike 6 Csi",
            "descripcion": "Zapatilla de marca nike",
            "precio": 35.000,
            "codigo": "653762376",
            "imagen": "https://http2.mlstatic.com/D_NQ_NP_613954-MLA51371562886_092022-O.webp",
            "stock": "54",
        }
        const respuesta = await request(RutaProducto).put('/:id').send({ actualizarProducto })
        expect(respuesta.statusCode).to.be(200)
        expect(respuesta.body).to.equal(`${productoActualizado}, Producto actualizado con exito`)
    })

    it('Debería eliminar un productos', async () => {
        const respuesta = await request(RutaProducto).delete('/1')
        expect(respuesta.statusCode).to.be(200)
        expect(respuesta.text).to.equal('Producto eliminado con exito')
        expect(respuesta.body).to.deep.equal([1])
    })

    it('Debería eliminar todos los productos', async () => {
        const respuesta = await request(RutaProducto).delete('/')
        expect(respuesta.statusCode).to.be(200)
        expect(respuesta.text).to.equal('Productos eliminados con exito')
        expect(respuesta.body).to.deep.equal([0])
    })

    test('Deberia dar error cuando falta descripcion al crear un nuevo producto', async () => {
        const crearProducto = {
            "titulo": "Venture Runner 0474 Nike 6 Csi",
            "precio": 40.000,
            "codigo": "653762376",
            "imagen": "https://http2.mlstatic.com/D_NQ_NP_613954-MLA51371562886_092022-O.webp",
            "stock": 54,
        }
        const respuesta = await request(RutaProducto).post('/').send({ crearProducto })
        expect(respuesta.statusCode).to.be(400)
    })

    test('Deberia dar error cuando falta el id para eliminar un producto', async () => {
        const respuesta = await request(RutaProducto).delete('/a')
        expect(respuesta.statusCode).to.be(400)
    })

    before(() => {
        logger.info('\n++++++++++| Comienzo de los Testeos |++++++++++')
    })

    after(() => {
        logger.info('\n<<<<<<<<<<| Final de los Testeos |>>>>>>>>>>>')
    })

    beforeEach(() => {
        logger.info('\n~~~~~~~~~~~~| Comienzo Test |~~~~~~~~~~~~')
    })

    afterEach(() => {
        logger.info('\n~~~~~~~~~~~~| Final del Test |~~~~~~~~~~~~')
    })

    // afterEach(() => {
    //     if (existsSync('todos.txt')) {
    //         unlinkSync('todos.txt')
    //     }
    // })
})



// describe("Comprobando que el servidor funcione bien", () => {
//     it(' guardar', async () => {
//         const numero = 2
//         const response = await request(RutaProducto).post('/ingreso').send({ numero })
//         expect(response.status).to.equal(200)
//         expect(response.text).to.equal(`Número ${numero} almacenado`)
//     })
//     it('recibir ', async () => {
//         const response = await request(app).get('/egreso')
//         expect(response.body.numeros).to.deep.equal([2])
//     })
// })

// it(' guardar', async () => {
//     const numero = 2
//     const response = await request(app).post('/ingreso').send({ numero })
//     expect(response.status).to.equal(200)
//     expect(response.text).to.equal(`Número ${numero} almacenado`)
// })
// it('recibir ', async () => {
//     const response = await request(app).get('/egreso')
//     expect(response.body.numeros).to.deep.equal([2])
// })
