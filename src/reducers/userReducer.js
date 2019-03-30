const initialStateLogin = {
  name: 'Uriel'
}

export default function loginReducer(state = initialStateLogin, action) {
  switch (action.type) {
    case 'LOG_IN':
      return Object.assign({}, state, { jwt: action.jwt });
    case 'LOG_OUT':
      return {};
    case 'LOAD_USER':
      return Object.assign({}, state, {
        name: action.user.name,
        _id: action.user._id,
        role: action.user.role,
        email: action.user.email
      })
    default:
      return state;
  }
}