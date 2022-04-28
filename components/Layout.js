function Layout({ children }) {
  return (
    <div>
      {children}
      <style global jsx>
        {`
          :root {
            --gradient: linear-gradient(#45aaf2, #4b7bec);
            --main-color: #4b7bec;
            --main-color-hover: #3867d6;
          }

          body {
            background: #f5f6fa;
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  )
}

export default Layout
