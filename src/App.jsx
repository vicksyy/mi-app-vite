import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiMessage, setApiMessage] = useState('')
  const [apiError, setApiError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFetchHola = async () => {
    setLoading(true)
    setApiError('')
    setApiMessage('')
    try {
      const response = await fetch('/api/hola?name=Vicky')
      if (!response.ok) {
        throw new Error(`Error ${response.status}`)
      }
      const data = await response.json()
      setApiMessage(data?.message ?? 'Respuesta sin mensaje')
    } catch (error) {
      setApiError(error?.message ?? 'No se pudo conectar con /api/hola')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <section className="card">
        <h2>API en Cloudflare Workers</h2>
        <p>
          Esta web usa una función sencilla en Cloudflare Pages Functions ubicada
          en <code>/functions/api/hola.js</code>. Al abrir <code>/api/hola</code>,
          el worker responde un JSON con un saludo.
        </p>
        <button onClick={handleFetchHola} disabled={loading}>
          {loading ? 'Consultando...' : 'Probar /api/hola'}
        </button>
        {apiMessage ? <p>Respuesta: {apiMessage}</p> : null}
        {apiError ? <p>Fallo: {apiError}</p> : null}
      </section>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
