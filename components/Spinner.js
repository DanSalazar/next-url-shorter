function Spinner() {
	return (
		<>
			<div className="spinner"></div>
			<style jsx>{`
				.spinner {
					border-radius: 50%;
					width: 32px;
					height: 32px;
					border: 4px solid var(--main-color);
					border-left-color: transparent;
					margin-top: 12px;
					animation: spin 1000ms linear infinite;
				}

				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}

					100% {
						transform: rotate(360deg);
					}
				}
			`}</style>
		</>
	)
}

export default Spinner