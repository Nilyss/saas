import './documents.scss'

// types
import { ReactElement } from 'react'
import { useRef, useEffect } from 'react'

export default function Documents(): ReactElement {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream: MediaStream): void => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
        .catch((err) => console.error('Error accessing the camera: ', err))
    }
  }, [])

  const captureImage = (): void => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d')
      if (context) {
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height,
        )
      }
    }
  }

  return (
    <>
      <p>En développement : Section à venir</p>
      <video ref={videoRef} width="640" height="480" autoPlay />
      <button onClick={captureImage}>Capture</button>
      <canvas
        ref={canvasRef}
        width="640"
        height="480"
        style={{ display: 'none' }}
      />
    </>
  )
}
