const INITIAL_STATE = {};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "":
      console.tron.log("bla");
      return state;
    default:
      console.tron.log("default", state);
      return state;
  }
}
