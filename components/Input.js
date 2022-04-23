function Input(props) {
	return (
		<>
			<input type="text" {...props} />
			<style jsx>{`
				input {
					background-color: #fff;
					border-radius: 8px;
					border: 0;
					font-size: 1.25em;
					padding: 12px 16px;
					color: #000;
					font-family: inherit;
					outline: none;
					font-weight: 500;
				}

				input[type='text']::placeholder {
					color: #b2bec3;
				}	
			`}</style>
		</>
	)
}

export default Input