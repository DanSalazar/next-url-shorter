export const startsWithHttp = (url) => (url.startsWith('https://') || url.startsWith('http://'))

export const websiteRegex = 
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ 

export const saveInLocalStorage = (url) => {
  const urls = JSON.parse(window.localStorage.getItem('urls')) || []
  let isSave

  for (const { url } of urls) {
    if (url === url) isSave = true
  } 

  if (isSave) return

  urls = [url, ...urls]

  window.localStorage.setItem('urls', JSON.stringify(urls))
}