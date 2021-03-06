'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {
  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=brun83qi3nl9ngtuq9o1abfl2v'
    + '&client_secret=ghq4st4guqaq4prpen2qvsamum'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://xbilyz3.github.io/meetUp/'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};


module.exports.refreshAccessToken = async (event) => {
  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=brun83qi3nl9ngtuq9o1abfl2v'
    + '&client_secret=ghq4st4guqaq4prpen2qvsamum'
    + '&grant_type=refresh_token'
    + '&refresh_token=' + event.pathParameters.refresh_code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};