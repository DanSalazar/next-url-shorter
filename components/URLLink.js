import Link from 'next/link'

function URLLink({ shortUrl }) {
  return (
    <>
      <Link href={`/${shortUrl}`}>
        <a className='url-short'>{window.location + shortUrl}</a>
      </Link>
      <style jsx>{`
        .url-short {
          font-weight: 500;
          font-size: 1em;
          background-color: #f0f0f0;
          padding: 12px 16px;
          border-radius: 8px;
          flex: 2 0 auto;
          color: var(--main-color);
          transition: background-color color 0.2s linear;
        }

        .url-short:hover {
          background-color: #ededed;
          color: var(--main-color-hover);
        }

        @media screen and (max-width: 325px) {
          .url-short {
            font-size: 0.5em;
          }
        }
      `}</style>
    </>
  )
}

export default URLLink
