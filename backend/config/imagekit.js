const ImageKit = require('imagekit');

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || 'public_T5gKTGaC4MlCTNaCYTMaKuMh',
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || 'private_4Smqo6pVqCmTbvCimg5Ws9zPoEc=',
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/g6aez0mdr'
});

module.exports = imagekit;
