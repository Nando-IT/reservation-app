import express from 'express';
import cors from 'cors';
import session from 'express-session';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';


/*import testRoutes from './router/test.Router';
import authRouter from './router/auth.router';
import gameRouter from './router/game.router';*/

export const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Reservation API',
      version: '1.0.0',
      description: 'Reservation API',
    },
  },
  apis: ['./src/controllers/*.ts'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
//Middlewares
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors({
  origin: "http://localhost:5173", // vagy a frontend címe
  credentials: true
}));

app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json());

app.use(session({
  secret: "titkos_kulcs",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // HTTPS esetén legyen true
    httpOnly: true,
    sameSite: "lax"
  }
}));

/*app.use('/api/test', testRoutes);
app.use('/api/auth', authRouter);
app.use('/api/game', gameRouter);*/



//app.use(errorHandler);
