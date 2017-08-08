import {get} from 'axios'

export const apiRoot = 'https://directusapi.alifaishol-test.tk'
const api = props => get('https://directusapi.alifaishol-test.tk/api/1.1/' + props).then(res => res.data)

const portfolioThumbnail = () => {
  return api('tables/portfolio/rows')
    .then(res => {
      return res.data.map(index => {
        return {
          img: apiRoot + index.images.data[0].url,
          title: index.title
        }
      })
    })
    .catch(err => console.log(err))
}

export default {
  portfolioThumbnail
}
