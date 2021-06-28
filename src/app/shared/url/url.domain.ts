'use strict';

const AUTH = 'auth/';

/**
 * Default URL of the back-end server.
 *
 * @type {string}
 */
export const SERVER_URL = 'https://api.apps4society.dcx.ufpb.br/educapi/v1/api/';

export namespace LoginURL {
  export const BASE = AUTH + 'login';
}

export namespace ContextURL {
  export const BASE = AUTH + 'contexts';
}

export namespace UserURL {
  export const BASE = 'users';
}

export namespace ChallengeURL {
  export const BASE = AUTH + 'challenges';
}



