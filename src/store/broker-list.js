import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 2000 }); // Задержка в 2 секунды

// Мокаем ответ от API
mock.onGet('/api/brokers').reply(200, [
    {
        "id": 1,
        "name": "название бpoкepa 1",
        "logo": "src/assets/logo.png",
        "country": "Страна 1",
        "contact": "Контактная информация 1"
      },
      {
        "id": 2,
        "name": "название бpoкepa 2",
        "logo": "src/assets/logo.png",
        "country": "Страна 2",
        "contact": "Контактная информация 2"
      },
      {
        "id": 3,
        "name": "название бpoкepa 3",
        "logo": "src/assets/logo.png",
        "country": "Страна 3",
        "contact": "Контактная информация 3"
      },
      {
        "id": 4,
        "name": "название бpoкepa 4",
        "logo": "src/assets/logo.png",
        "country": "Страна 4",
        "contact": "Контактная информация 4"
      },
      {
        "id": 5,
        "name": "название бpoкepa 5",
        "logo": "src/assets/logo.png",
        "country": "Страна 5",
        "contact": "Контактная информация 5"
      },
      {
        "id": 6,
        "name": "название бpoкepa 6",
        "logo": "src/assets/logo.png",
        "country": "Страна 6",
        "contact": "Контактная информация 6"
      },
      {
        "id": 7,
        "name": "название бpoкepa 7",
        "logo": "src/assets/logo.png",
        "country": "Страна 7",
        "contact": "Контактная информация 7"
      },
      {
        "id": 8,
        "name": "название бpoкepa 8",
        "logo": "src/assets/logo.png",
        "country": "Страна 8",
        "contact": "Контактная информация 8"
      },
      {
        "id": 9,
        "name": "название бpoкepa 9",
        "logo": "src/assets/logo.png",
        "country": "Страна 9",
        "contact": "Контактная информация 9"
      },
      {
        "id": 10,
        "name": "название бpoкepa 10",
        "logo": "src/assets/logo.png",
        "country": "Страна 10",
        "contact": "Контактная информация 10"
      }
]);


function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


const state = {
  items: [],
  searchTerm: '',
  loader: false,
};

const getters = {
  filteredItems: (state) => {
    if (!state.searchTerm) return state.items;
    
    const regex = new RegExp(escapeRegExp(state.searchTerm), 'i');
    return state.items.filter(item => regex.test(item.country));
  },
  getLoader: (state) => {
    return state.loader;
  }
};

const mutations = {
  SET_ITEMS(state, items) {
    state.items = items;
  },
  SET_SEARCH_TERM(state, term) {
    state.searchTerm = term;
  },
  SET_LOADER(state, loader) {
    state.loader = loader;
  },
};

const actions = {
  fetchItems({ commit, state }) {
    state.loader = true;
    axios.get('/api/brokers')
      .then(response => {
        console.log(response.data)
        commit('SET_ITEMS', response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      })
      .finally(() => {
        commit('SET_LOADER', false);
      });
  },
  setSearchTerm({ commit }, term) {
    console.log(term)
    commit('SET_SEARCH_TERM', term);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};