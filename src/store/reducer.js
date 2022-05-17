const GET_STATS = 'covid/GET_STATS';

const intialState = [];

const GetStats = (payload) => ({
  type: GET_STATS,
  payload,
});

const StatsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_STATS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export { GetStats, StatsReducer };
