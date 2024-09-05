import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import xss from 'xss-clean';
import { rateLimit } from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';
import config from './config/config';
import { NotFoundError } from './utils/errors';

const app = express();

// Security middleware
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

// CORS
app.use(cors());

// Logging
app.use(morgan(config.env === 'production' ? 'combined' : 'dev'));

// Body parsing
app.use(express.json({ limit: '10kb' })); // Limit body size
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Rate limiting
const limiter = rateLimit({
  max: 100, // Limit each IP to 100 requests per `window`
  windowMs: 15 * 60 * 1000, // 15 minutes
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/api', limiter);

// Routes
app.use('/api', routes);

// Handle 404 errors
app.use((req, res, next) => {
  next(new NotFoundError('Endpoint not found'));
});

// Error handler middleware
app.use(errorHandler);

// Content Security Policy
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  }),
);

if (config.env === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });
}

// Additional security headers
app.use(helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' }));
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.hsts({ maxAge: 31536000, includeSubDomains: true, preload: true }));

export default app;
