import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Input from '../components/Input'

export default function Home() {
  const [url, setUrl] = useState('')

  const onSubmitUrl = () => {
    fetch('/api/url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ url })
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <div>
      <Head>
        <title>Next URL-Shorter</title>
      </Head>
      <main>
        <h2>URL Shortener</h2>
        <div className="container">
          <Input placeholder={'Enter a url'} onChange={({ target }) => setUrl(target.value)} ></Input>
          <button className="submit" onClick={onSubmitUrl}>
            Create
          </button>
        </div>
      </main>
      <style jsx>{`
        h2 {
          font-size: 2.75em;
          background: -webkit-linear-gradient(#0be881, #00d8d6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          text-transform: uppercase;
          text-align: center;
        }

        .submit {
          background-color: #00d8d6;
          border-radius: 8px;
          padding: 12px 24px;
          border: 0;
          outline: none;
          transition: background-color 0.2s ease;
          font-weight: 500;
          font-family: inherit;
          font-size: 1.25em;
        }

        .submit:hover {
          background-color: #34e7e4;
        }

        .container {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 0 12px;
          min-height: 400px;
        }
       `}</style>
    </div>
  )
}
