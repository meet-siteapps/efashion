const imagekit = require('./config/imagekit');

// Test with a very small image (1x1 pixel red PNG - only 95 bytes)
const tinyImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==';

async function testSmallUpload() {
  try {
    console.log('Testing upload with tiny image...\n');
    console.log('ImageKit Config:');
    console.log('- Public Key:', imagekit.options.publicKey);
    console.log('- URL Endpoint:', imagekit.options.urlEndpoint);
    console.log('- Private Key:', imagekit.options.privateKey ? '✓ Set' : '✗ Not set');
    console.log('\nUploading...');
    
    const result = await imagekit.upload({
      file: tinyImage,
      fileName: `test_tiny_${Date.now()}.png`,
      folder: '/products',
      useUniqueFileName: true
    });

    console.log('\n✅ Upload successful!');
    console.log('URL:', result.url);
    console.log('File ID:', result.fileId);
    console.log('\nImageKit is working correctly!');
    console.log('The issue might be with image size or format.');
    
  } catch (error) {
    console.error('\n❌ Upload failed!');
    console.error('Error:', error.message);
    
    if (error.message.includes('authenticate')) {
      console.error('\n🔑 Authentication Error:');
      console.error('- Check if private key is correct');
      console.error('- Verify credentials at: https://imagekit.io/dashboard/developer/api-keys');
    } else {
      console.error('\nFull error:', error);
    }
  }
}

testSmallUpload();
