
import express from 'express';
import handlebars from 'express-handlebars';
import cookieParser from "cookie-parser";
import { rutAutenticacion, RutaServidor, rutaProducto, rutaCarrito, RutaMensaje } from "./Rutas/index.js";
import { RutaInexistente } from './Middlewares/index.js';
import { ClienteAxiosHttp } from './Cliente/axios.js';
import { graphqlHTTP } from "express-graphql";
import { EsquemaGralphQl } from "./GraphQL/index.js";

const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + 'uploads'));


// Motor de plantilla
app.engine("hbs", handlebars.engine({ extname: ".hbs", defaultLayout: "main.hbs" }));

app.set('view engine', 'hbs')
app.set('views', './public/Vistas');
// app.set('views', __dirname + "/Vistas");


// Instancias de las rutas
const RutaAutenticacion = new rutAutenticacion();
const RutaCarritos = new rutaCarrito();
const RutaProductos = new rutaProducto();
const RutaMensajes = new RutaMensaje();

// Rutas 
app.use('/api/', RutaServidor);
app.use('/api/axios', ClienteAxiosHttp);
app.use("/api/graphql", graphqlHTTP({ graphiql: true, EsquemaGralphQl }));
app.use('/api/autenticacion', RutaAutenticacion.start());
app.use('/api/carrito', RutaCarritos.start());
app.use('/api/productos', RutaProductos.start());
app.use('/api/mensajes', RutaMensajes.start());
app.use('/api/*', RutaInexistente);


export { app };





// App Alan

// import { EsquemaGralphQl } from "./GraphQL/index.js";

// Lo nuevo para graphql
// import { graphqlHTTP } from "express-graphql";


// el middleware, para exponer en /graphql todo su schema
// app.use("/graphql", graphqlHTTP({ graphiql: true, EsquemaGralphQl }))






// App Jose

// import GraphQLController from './controladores/GraphQLController.js';

// app.use('/graphql', new GraphQLController());



