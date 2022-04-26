import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Input from '../components/Input'
import Urls from '../components/Urls'
import { websiteRegex } from '../utils'

export default function Home() {
  const [url, setUrl] = useState('')
  const [urls, setUrls] = useState([])
  const [errors, setErrors] = useState({ hasError: false, message: '' })

  const onSubmitUrl = (e) => {
    e.preventDefault()

    if (!url.match(websiteRegex)) {
      setErrors({ hasError: true, message: 'Enter a valid website' })
      return
    }

    setErrors({ hasError: false, message: '' })

    fetch('/api/short-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ url })
    })
      .then(res => res.json())
      .then(data => {
        setUrls(urls.concat(data))
        setUrl('')
      })
      .catch(err => setErrors({ hasError: true, message: 'An error has occurred' }))
  }

  return (
    <div>
      <Head>
        <title>Next URL-Shorter</title>
      </Head>
      <main>
        <h2>URL Shortener</h2>
        <form className='form-container' onSubmit={onSubmitUrl}  >
          <Input placeholder={'Enter a url'} value={url} onChange={({ target }) => setUrl(target.value)} />
          <button className="btn submit" >
            Short
          </button>
        </form>
        <div className='error-container'>
          {errors.hasError && <span className='error'>{errors.message}</span>}
        </div>
        <Urls urls={urls} />
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

        .form-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px 12px;
          flex-wrap: wrap;
        }

        .error-container {
          width: 100%;
          display: grid;
          place-items: center;
          margin-top: 12px;
          min-height: 25px;
        }

        .error {
          color: #eb4d4b;
          font-weight: 600;
          font-size: 1em;
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
