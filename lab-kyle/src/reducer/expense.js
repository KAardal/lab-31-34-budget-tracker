export default (state = {}, action) => {
  let { type, payload } = action

  switch (type) {
  case 'CATEGORY_CREATE':
    return { ...state, [payload.id]: [] }

  case 'CATEGORY_DELETE':
    return { ...state, [payload.id]: undefined }

  case 'EXPENSE_CREATE':
    return {
      ...state,
      [payload.categoryID]: [...state[payload.categoryID], payload],
    }

  default:
    return state
  }
}