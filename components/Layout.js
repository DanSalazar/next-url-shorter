
function Layout({children}) {
	return (
		<div>
			{children}  
			<style global jsx>{`
				body {
					background: linear-gradient(-45deg, #2f3640, #353b48, #192a56, #273c75);
					background-size: 400% 400%;
					animation: gradient 15s ease infinite;
					height: 100vh;
					padding: 0;
				  margin: 0;
				  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
				    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
				}

				a {
				  color: inherit;
				  text-decoration: none;
				}

				* {
				  box-sizing: border-box;
				}

				@keyframes gradient {
					0% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
					100% {
						background-position: 0% 50%;
					}
				}
			`}
			</style>
		</div>
	)
}

export default Layout