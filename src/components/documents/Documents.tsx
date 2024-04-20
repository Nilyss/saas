import './documents.scss'

// types
import { ReactElement } from 'react'
import { useRef, useEffect } from 'react'

export default function Documents(): ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream: MediaStream): void => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error('Error accessing the camera: ', err));
    } else {
      console.error("getUserMedia not supported in this browser");
    }
  }, []);

  const captureImage = (): void => {
    if (videoRef.current && canvasRef.current) {
      const context: CanvasRenderingContext2D | null = canvasRef.current.getContext('2d')
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
      <video ref={videoRef} width="300" height="480" autoPlay />
      <button onClick={captureImage}>Capture</button>
      <canvas
        ref={canvasRef}
        width="300"
        height="480"
        style={{ display: 'none' }}
      />
    </>
  )
}
