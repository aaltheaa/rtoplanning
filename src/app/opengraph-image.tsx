import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'RTO Planning — Office Attendance Tracker'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #2d6a9f 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-2px',
            marginBottom: '24px',
          }}
        >
          RTO Planning
        </div>
        <div
          style={{
            fontSize: 32,
            color: 'rgba(255,255,255,0.85)',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Track office attendance. Verify RTO mandate compliance. Plan your schedule.
        </div>
        <div
          style={{
            marginTop: '48px',
            fontSize: 24,
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          rtoplanning.vercel.app
        </div>
      </div>
    ),
    { ...size }
  )
}
