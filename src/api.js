import {get} from 'axios'

export const apiRoot = 'https://directusapi.alifaishol-test.tk'
const api = props => get(apiRoot + '/api/1.1/' + props).then(res => res.data)

export const portfolioThumbnail = ({sort,offset,limit} = {sort: ['id', 'ASC'], offset: 0, limit: 200}) => {
  return api('tables/portfolio/rows?limit=' + limit + '&offset=' + offset)
    .then(res => {
      return res.data.map(index => {
        return {
          id: index.id,
          img: apiRoot + index.images.data[0].url,
          title: index.title,
          content: index.content
        }
      })
    })
    .catch(err => console.log(err))
}

export const portfolioItemDetails = (id) => {
  return api('tables/portfolio/rows/' + id)
    .then(res => {
      return {
        title: res.data.title,
        content: res.data.content,
        images: res.data.images.data.map(item => {
          return {
            id: item.id,
            url: apiRoot + item.url
          }
        })
      }
    })
    .catch(err => console.log(err))
}

