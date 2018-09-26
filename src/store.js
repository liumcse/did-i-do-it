import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  applicationList: [
    {
      company: 'Uber',
      role: 'Software Engineer',
      applyDate: 'Sept 25, 2018',
      location: 'Seattle, WA',
      status: 'Pending',
      memo: 'For fun',
      weight: 0,
    },
    {
      company: 'Airbnb',
      role: 'Software Engineer',
      applyDate: 'Sept 26, 2018',
      location: 'San Francisco, WA',
      status: 'No Offer',
      memo: 'Summer 2019',
      weight: 20,
    },
    {
      company: 'Slack',
      role: 'Front End Engineer',
      applyDate: 'Sept 21, 2018',
      location: 'Boston, MA',
      status: 'Interview',
      memo: 'Coop',
      weight: 10,
    },
    {
      company: 'Facebook',
      role: 'Front End Engineer',
      applyDate: 'Sept 14, 2018',
      location: 'Multiple, United States',
      status: 'Interview',
      memo: '彩票',
      weight: 5,
    },
  ],
};

export default createStore(rootReducer, initialState);
