function Button({ children, color, hover, styles, onClick }) {
	return (
		<>
			<button className='btn' onClick={onClick}>
        {children}
			</button>
			<style jsx>{`
				.btn {
          background-color: ${color || '#2f3640'};
          font-size: 1em;
          color: #fff;
          border: 0;
          outline: none;
          border-radius: 8px;
          font-family: inherit;
          font-weight: 600;
          cursor: pointer;
          ${styles || ''}
        }

        .btn:hover {
          background-color: ${hover || 'none'};
        }
			`}</style>
		</>
	)
}

export default Button