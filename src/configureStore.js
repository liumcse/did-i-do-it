import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['modalType', 'modalProps'],
};

// const initialState = {
//   modalType: null,
//   modalProps: null,
//   applicationList: [
//     {
//       company: 'Uber',
//       role: 'Software Engineer',
//       applyDate: 'Sept 25, 2018',
//       location: 'Seattle, WA',
//       status: 'Pending',
//       memo: 'For fun',
//       weight: 0,
//     },
//     {
//       company: 'Airbnb',
//       role: 'Software Engineer',
//       applyDate: 'Sept 26, 2018',
//       location: 'San Francisco, WA',
//       status: 'No Offer',
//       memo: 'Summer 2019',
//       weight: 20,
//     },
//     {
//       company: 'Slack',
//       role: 'Front End Engineer',
//       applyDate: 'Sept 21, 2018',
//       location: 'Boston, MA',
//       status: 'Interview',
//       memo: 'Coop',
//       weight: 10,
//     },
//     {
//       company: 'Facebook',
//       role: 'Front End Engineer',
//       applyDate: 'Sept 14, 2018',
//       location: 'Multiple, United States',
//       status: 'Interview',
//       memo: '彩票',
//       weight: 5,
//     },
//   ],
// };

const initialState = {
  modalType: null,
  modalProps: null,
  applicationList: [
    {
      company: 'Kai',
      role: 'Supreme Kai',
      applyDate: 'Sept 25, 2018',
      location: 'Sacred World of the Kai',
      status: 'Pending',
      memo:
        'The Supreme Kais (界かい王おう神しん Kaiōshin, lit. "Worlds\' Kings\' Gods"), also known as the Creation Gods (創造神 Sōzōshin)[1] or Grand Supreme Kais (大だい界かい王おう神しん Dai Kaiōshin, lit. "Worlds\' Kings\' Great Gods"), are the Core People who are naturally born divine and who have the ultimate duty to protect the universe of their position. Along with the Gods of Destruction, they are the ruling and overseeing class of the twelve, formerly eighteen, universes, and each universe has its own set of gods.',
      weight: 0,
    },
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, initialState);
const persistor = persistStore(store);

export { store, persistor };
