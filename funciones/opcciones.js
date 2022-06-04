const mqtt = require('mqtt');

export const options = {
    connectTimeout: 4000,
    // Auth
    clientId: 'emqx_test',
    username: 'emqx_test',
    password: 'emqx_test',
  }

export const client  = mqtt.connect('localhost', options)
