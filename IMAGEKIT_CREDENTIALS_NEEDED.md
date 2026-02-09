# ImageKit Credentials Required

## ⚠️ Authentication Failed

The ImageKit upload is failing because the credentials need to be verified.

## 🔑 How to Get Your ImageKit Credentials

1. **Go to ImageKit Dashboard**: https://imagekit.io/dashboard
2. **Login to your account**
3. **Go to Developer Options** (in the left sidebar)
4. **Copy your credentials:**
   - Public Key
   - Private Key (make sure to copy the FULL key including any special characters)
   - URL Endpoint

## 📝 Update Credentials

### Option 1: Update .env file (Recommended)

Add these lines to `backend/.env`:

```env
IMAGEKIT_PUBLIC_KEY=your_public_key_here
IMAGEKIT_PRIVATE_KEY=your_private_key_here
IMAGEKIT_URL_ENDPOINT=your_url_endpoint_here
```

### Option 2: Update config file directly

Edit `backend/config/imagekit.js` and replace the values:

```javascript
const imagekit = new ImageKit({
  publicKey: 'your_public_key_here',
  privateKey: 'your_private_key_here',  // Make sure this is complete!
  urlEndpoint: 'your_url_endpoint_here'
});
```

## ✅ Test After Updating

Run this command to test:

```bash
cd backend
node testImageKit.js
```

If you see "✅ ImageKit is configured correctly!", you're good to go!

## 🚀 Alternative: Use Direct URL Upload

If ImageKit continues to have issues, you can use direct URL input instead:

1. Upload images to any image hosting service (Cloudinary, ImgBB, etc.)
2. Copy the image URL
3. Paste it directly in the "Image URL" field in the admin panel

The current admin form already supports direct URL input as a fallback!
