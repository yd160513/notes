const REMBER_ANSWER = 'REMBER_ANSWER';
const ADD_ITEMNUM = 'ADD_ITEMNUM';
const INITIALIZE_DATA = 'INITIALIZE_DATA';

export default {
  [REMBER_ANSWER](state, id) {
    state.answerid.push(id);
  },
  [ADD_ITEMNUM](state, num) {
    state.itemNum += num;
  },
  [INITIALIZE_DATA](state) {
    state.itemNum = 1;
    state.answerid = [];
  }
}