import data from './data.json'

const portfolioThumbnail = () => {
  return new Promise((res, rej) => {
    res(
      data.portfolio.map((index, i) => {
        return {
          id: i,
          img: index.images[0],
          title: index.name,
          content: index.body
        }
      })
    )
  })
}

const portfolioItemDetails = (id) => {
  return new Promise((res, rej) => {
    const item = data.portfolio[id]
    res({
      title: item.name,
      content: item.body,
      images: item.images.map((item, i) => {
        return {
          id: i,
          url: item
        }
      })
    }
    )
  })
}

export default {
  portfolioThumbnail,
  portfolioItemDetails
}
