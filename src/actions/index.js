import mockData from '../mockData/mock.json'
export const CATEGORIES_GET = 'CATEGORIES_GET'
export const ADD_CATEGORY = 'ADD_CATEGORY'

export const categoriesGet = () => ({
  type: CATEGORIES_GET,
  data: mockData
})


export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  category
})

