import {get} from 'axios'

export const apiRoot = 'https://directusapi.alifaishol-test.tk'
export default props => get('https://directusapi.alifaishol-test.tk/api/1.1/' + props).then(res => res.data)
