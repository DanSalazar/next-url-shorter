function Urls() {
	return ( 
		<div className='urls-container'>
			<h3>Urls</h3>
			<div className="urls-list">
				<div className='url-item'>
					<span className='url-hash'>www.example.com</span>
					<button className='url-btn btn'>Copy</button>
				</div>
				<div className='url-item'>
					<span className='url-hash'>www.example2.com</span>
					<button className='url-btn btn'>Copy</button>
				</div>
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

				.url-hash {
					font-weight: 500;
					font-size: 1em;
					background-color: #f0f0f0;
					padding: 12px 16px;
					border-radius: 8px;
					flex: 2 0 auto;
					color: var(--main-color);
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
					.url-hash {
						font-size: 0.75em;
					}
          .url-btn {
          	font-size: 0.75em;
          }
        }
			`}</style>
		</div>
	)
}

export default Urls