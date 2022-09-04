export function userData(
  state = { token: null, username: null, is_staff: null, loaded: false },
  action
) {
  if (action.type == "STOREDUSER") {
    return { ...action.payload, loaded: true };
  } else if (action.type == "LoadUSER") {
    return { ...action.payload, loaded: true };
  }
  return state;
}
