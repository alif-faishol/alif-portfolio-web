import sdk from 'directus-sdk-javascript/remote'

const api = new sdk({
  url: 'https://128.199.89.68/api/1.1/'
})

export default api.getItem('pages', 1)
