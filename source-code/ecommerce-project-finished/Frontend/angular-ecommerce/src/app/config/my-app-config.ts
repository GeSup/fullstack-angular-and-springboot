import { environment } from '../../environments/environment';

export default {
  auth0: {
    domain: environment.auth0.domain,
    clientId: environment.auth0.clientId,
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  },
};
