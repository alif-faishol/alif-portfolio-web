import directusApi from './directusApi'
import staticJson from './staticJson'

const useStaticJson = true

export const {portfolioThumbnail, portfolioItemDetails} = useStaticJson ? staticJson : directusApi
