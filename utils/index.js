export const startsWithHttp = (url) => (url.startsWith('https://') || url.startsWith('http://'))

export const websiteRegex = 
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ 