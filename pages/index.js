import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Input from '../components/Input'
import Urls from '../components/Urls'

export default function Home() {
  const [url, setUrl] = useState('')
  const [urls, setUrls] = useState([])
  const [errors, setErrors] = useState(false)

  const onSubmitUrl = () => {
    fetch('/api/url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ url })
    })
      .then(res => res.json())
      .then(data => {
        setUrls(urls.concat(data))
        console.log(data, urls)
      })
      .catch(err => setErrors(true))
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
          <button className="btn submit" onClick={onSubmitUrl}>
            Short
          </button>
        </div>
        <Urls/>
      </main>
      <style jsx>{`
        h2 {
          font-size: 2.75em;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          text-transform: uppercase;
          text-align: center;
        }

        .submit {
          background-color: var(--main-color);
          padding: 8px 24px;
          font-size: 1em;
          color: #fff;
          transition: background 300ms linear;
        }

        .submit:hover {
          background-color: var(--main-color-hover);
        }

        .container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px 12px;
          flex-wrap: wrap;
        }

        @media screen and (min-width: 768px) {
          .submit {
            font-size: 1.25em;
            padding: 12px 24px;
          }
        }  
       `}</style>
    </div>
  )
}
