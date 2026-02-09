const imagekit = require('./config/imagekit');
const fs = require('fs');
const path = require('path');

// Test image upload with a sample base64 image (1x1 red pixel PNG)
const sampleBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==';

async function testUpload() {
  try {
    console.log('Testing ImageKit upload...\n');
    
    const result = await imagekit.upload({
      file: sampleBase64,
      fileName: `test_${Date.now()}.png`,
      folder: '/products',
      useUniqueFileName: true
    });

    console.log('✅ Upload successful!');
    console.log('URL:', result.url);
    console.log('File ID:', result.fileId);
    console.log('File Name:', result.name);
    console.log('\nYou can view the image at:', result.url);
    
  } catch (error) {
    console.error('❌ Upload failed:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

testUpload();
