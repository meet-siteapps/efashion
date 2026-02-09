import { useState } from 'react'
import api from '../config/api'

const ImageUpload = ({ onUploadSuccess, currentImage }) => {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState(currentImage || '')
  const [error, setError] = useState('')

  // Compress image before upload
  const compressImage = (file, maxSizeMB = 0.8) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      
      reader.onload = (event) => {
        const img = new Image()
        img.src = event.target.result
        
        img.onload = () => {
          const canvas = document.createElement('canvas')
          let width = img.width
          let height = img.height
          
          // Calculate new dimensions (max 1000px for better compression)
          const maxDimension = 1000
          if (width > height && width > maxDimension) {
            height = (height * maxDimension) / width
            width = maxDimension
          } else if (height > maxDimension) {
            width = (width * maxDimension) / height
            height = maxDimension
          }
          
          canvas.width = width
          canvas.height = height
          
          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, width, height)
          
          // Convert to base64 with compression (start with lower quality)
          let quality = 0.7
          let compressedBase64 = canvas.toDataURL('image/jpeg', quality)
          
          // If still too large, reduce quality more aggressively
          const targetSize = maxSizeMB * 1024 * 1024 * 1.37 // base64 is ~37% larger
          while (compressedBase64.length > targetSize && quality > 0.3) {
            quality -= 0.05
            compressedBase64 = canvas.toDataURL('image/jpeg', quality)
          }
          
          console.log('Compressed:', {
            originalSize: (file.size / 1024).toFixed(2) + ' KB',
            compressedSize: (compressedBase64.length / 1024).toFixed(2) + ' KB',
            compressedMB: (compressedBase64.length / 1024 / 1024).toFixed(2) + ' MB',
            quality: quality.toFixed(2),
            dimensions: `${width}x${height}`
          })
          
          resolve(compressedBase64)
        }
        
        img.onerror = reject
      }
      
      reader.onerror = reject
    })
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Reset error
    setError('')

    console.log('File selected:', {
      name: file.name,
      size: file.size,
      sizeKB: (file.size / 1024).toFixed(2) + ' KB',
      sizeMB: (file.size / 1024 / 1024).toFixed(2) + ' MB',
      type: file.type
    })

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file')
      return
    }

    // Validate file size (max 10MB before compression)
    if (file.size > 10 * 1024 * 1024) {
      const sizeMB = (file.size / 1024 / 1024).toFixed(2)
      setError(`Image is ${sizeMB}MB. Must be under 10MB.`)
      alert(`❌ Image too large: ${sizeMB}MB\n\nPlease use an image under 10MB.`)
      return
    }

    try {
      setUploading(true)
      console.log('Compressing image...')

      // Compress image to ~800KB
      const compressedBase64 = await compressImage(file, 0.8)
      console.log('Image compressed, uploading...')

      // Set timeout for upload (60 seconds)
      const uploadPromise = api.post('/api/upload/upload', {
        file: compressedBase64,
        fileName: file.name,
        folder: '/products'
      })

      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Upload timeout - taking too long')), 60000)
      )

      // Race between upload and timeout
      const { data } = await Promise.race([uploadPromise, timeoutPromise])

      console.log('Upload response:', data)

      if (data.success && data.url) {
        setPreview(data.url)
        onUploadSuccess(data.url, data.fileId)
        setError('')
        alert('✅ Image uploaded successfully!')
      } else {
        throw new Error('Upload failed - no URL returned')
      }
    } catch (error) {
      console.error('Upload error:', error)
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      })
      
      let errorMsg = 'Unknown error'
      
      if (error.response) {
        // Server responded with error
        if (error.response.status === 413) {
          errorMsg = 'Image too large even after compression. Try a smaller image.'
        } else if (error.response.status === 500) {
          errorMsg = error.response.data?.details || 'Server error. Check backend console.'
        } else {
          errorMsg = error.response.data?.error || error.response.data?.details || `Server error (${error.response.status})`
        }
      } else if (error.request) {
        // Request made but no response
        errorMsg = 'Cannot connect to server. Make sure backend is running on port 5000'
      } else {
        errorMsg = error.message
      }
      
      setError(errorMsg)
      alert(`❌ Upload failed: ${errorMsg}\n\nPlease use the direct URL input below instead.`)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <label 
        className="block font-semibold mb-2"
        style={{ color: '#E5E5E5' }}
      >
        Upload Product Image
      </label>
      
      <div className="space-y-3">
        {/* File Input */}
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="w-full rounded-lg px-4 py-3 focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: '#0A0A0A',
              border: '1px solid rgba(160, 160, 160, 0.2)',
              color: '#E5E5E5'
            }}
          />
          {uploading && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-blue-electric border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs text-blue-electric">Compressing & Uploading...</span>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 rounded-lg" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <p className="text-sm text-red-400">⚠️ {error}</p>
            <p className="text-xs text-red-300 mt-1">Use the direct URL input below instead</p>
          </div>
        )}

        {/* Image Preview */}
        {preview && !error && (
          <div className="relative">
            <img 
              src={preview} 
              alt="Preview" 
              className="w-full h-48 object-cover rounded-lg"
              style={{ border: '1px solid rgba(160, 160, 160, 0.2)' }}
            />
            <div className="absolute top-2 right-2">
              <span 
                className="px-2 py-1 rounded text-xs font-semibold"
                style={{
                  background: 'rgba(34, 197, 94, 0.9)',
                  color: 'white'
                }}
              >
                ✓ Uploaded
              </span>
            </div>
          </div>
        )}

        {/* Upload Instructions */}
        <p className="text-xs" style={{ color: '#A0A0A0' }}>
          Supported: JPG, PNG, WEBP (Max 10MB) • Auto-compressed before upload
        </p>
      </div>
    </div>
  )
}

export default ImageUpload