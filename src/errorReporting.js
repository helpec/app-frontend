import Raven from 'raven-js';
import { version } from '../package.json';

const SENTRY_DSN = "https://4b7230cb9c804ad49586daba0205cc3a@sentry.io/1415770"

function configSentry() {
  return Raven.config(SENTRY_DSN, {
    release: version,
    environment: process.env.NODE_ENV,
  }).install();
}
export default configSentry();