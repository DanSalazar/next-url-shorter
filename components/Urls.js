import { useState } from 'react'
import URLLink from './URLLink'

function Urls({ urls }) {
	const [alert, setAlert] = useState(false)

	const copyUrl = (text) => {
		navigator.clipboard.writeText(window.location + text)
			.then(() => setAlert(true))
			.catch(e => {
				setAlert(false)
				console.log(e)
			})
	}

	return ( 
		<div className='urls-container'>
			<div className="urls-list">
				{urls.map(url => (
					<div className='url-item' key={url.id} >
						<URLLink shortUrl={url.shortUrl} />
						<button className='url-btn btn' onClick={() => copyUrl(url.shortUrl)}>Copy</button>
					</div>
				))}
			</div>
			<style>{`
				.urls-container {
					width: 90%;
					margin: 32px auto;
				}

				h3 {
					font-size: 1.5em;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          text-transform: uppercase;
          text-align: center;
				}

				.urls-list {
					border-top: 1px solid #ecf0f1;
					width: 100%;
					padding-top: 16px;
					display: flex;
					gap: 8px 0;
					flex-direction: column;
				}

				.url-item {
					display: flex;
					gap: 0 16px;
					justify-content: space-between;
				}

				.url-btn {
					background-color: #2f3640;
					color: #fff;
					padding: 12px 24px;
					font-size: 1em;
				}

				.url-link {
					font-size: 0.75em;
					background-color: #ff6b81;
					border-radius: 8px;
					font-weight: 600;
					padding: 4px 16px;
					flex: 2 0 auto;
				}

				@media screen and (max-width: 325px) {
          .url-btn {
          	padding: 8px 16px;
          	font-size: 0.5em;
          }
        }
			`}</style>
		</div>
	)
}

export default Urls