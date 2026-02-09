const express = require('express');
const router = express.Router();
const imagekit = require('../config/imagekit');

// Get ImageKit authentication parameters
router.get('/auth', (req, res) => {
  try {
    const authenticationParameters = imagekit.getAuthenticationParameters();
    res.json(authenticationParameters);
  } catch (error) {
    console.error('Error getting auth parameters:', error);
    res.status(500).json({ error: 'Failed to get authentication parameters' });
  }
});

// Upload image to ImageKit
router.post('/upload', async (req, res) => {
  try {
    const { file, fileName, folder } = req.body;

    console.log('=== Upload Request Received ===');
    console.log('File name:', fileName);
    console.log('Folder:', folder);
    console.log('File data length:', file ? file.length : 0);
    console.log('File size (MB):', file ? (file.length / 1024 / 1024).toFixed(2) : 0);

    if (!file) {
      console.log('❌ No file provided');
      return res.status(400).json({ 
        success: false,
        error: 'No file provided' 
      });
    }

    // Check if file is too large (ImageKit has 25MB limit for free plan)
    const fileSizeMB = file.length / 1024 / 1024;
    if (fileSizeMB > 20) {
      console.log('❌ File too large:', fileSizeMB.toFixed(2), 'MB');
      return res.status(413).json({
        success: false,
        error: 'File too large',
        details: `File is ${fileSizeMB.toFixed(2)}MB. Maximum is 20MB.`
      });
    }

    console.log('📤 Uploading to ImageKit...');

    const result = await imagekit.upload({
      file: file, // base64 encoded file
      fileName: fileName || `product_${Date.now()}`,
      folder: folder || '/products',
      useUniqueFileName: true
    });

    console.log('✅ Upload successful!');
    console.log('URL:', result.url);
    console.log('File ID:', result.fileId);

    res.json({
      success: true,
      url: result.url,
      fileId: result.fileId,
      name: result.name
    });
  } catch (error) {
    console.error('❌ Error uploading to ImageKit:');
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Error name:', error.name);
    
    if (error.response) {
      console.error('ImageKit response status:', error.response.status);
      console.error('ImageKit response data:', error.response.data);
    }
    
    // Send detailed error to frontend
    let errorMessage = error.message;
    if (error.response?.data?.message) {
      errorMessage = error.response.data.message;
    }
    
    res.status(500).json({ 
      success: false,
      error: 'Failed to upload image',
      details: errorMessage,
      hint: 'Check backend console for full error details'
    });
  }
});

// Delete image from ImageKit
router.delete('/delete/:fileId', async (req, res) => {
  try {
    const { fileId } = req.params;

    await imagekit.deleteFile(fileId);

    res.json({
      success: true,
      message: 'Image deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting from ImageKit:', error);
    res.status(500).json({ error: 'Failed to delete image' });
  }
});

module.exports = router;
