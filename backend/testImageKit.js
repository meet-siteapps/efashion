const imagekit = require('./config/imagekit');

// Test ImageKit connection
async function testImageKit() {
  try {
    console.log('Testing ImageKit connection...');
    console.log('Public Key:', imagekit.options.publicKey);
    console.log('URL Endpoint:', imagekit.options.urlEndpoint);
    
    // Get authentication parameters
    const authParams = imagekit.getAuthenticationParameters();
    console.log('✅ Authentication parameters generated successfully');
    console.log('Token:', authParams.token);
    console.log('Expire:', authParams.expire);
    console.log('Signature:', authParams.signature);
    
    console.log('\n✅ ImageKit is configured correctly!');
    console.log('You can now upload images through the admin panel.');
    
  } catch (error) {
    console.error('❌ Error testing ImageKit:', error.message);
    console.error('Please check your ImageKit credentials in backend/config/imagekit.js');
  }
}

testImageKit();
