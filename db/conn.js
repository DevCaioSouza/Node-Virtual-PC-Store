const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/loja-virtual-pcs';

const client = new MongoClient(uri);

async function run() {
  try {
    client.connect();
    console.log('Conectado ao mongodb - Loja virtual PCS');
  } catch (err) {
    console.log('Erro: ', err);
  }
}

run();

module.exports = client;
