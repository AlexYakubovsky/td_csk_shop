import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = () => ({
  productsData: [],
  currentCity: 'Москва и Московская область',
  currentCategory: '',
  menuRoutes: '',
  menuDropdowns: {},
  categories: {},
  cart: [],
  productsProperties: {},
  productsFilters: {}
})

export const mutations = {
  SET_CITY(state, data) {
    state.currentCity = data
  },

  GET_CATEGORIES(state, data) {
    state.categories = data
  },

  SET_PRODUCTS_DATA(state, data) {
    state.productsData = data
  },

  SET_CURRENT_CATEGORY(state, cat) {
    state.currentCategory = cat
  },

  ADD_TO_CART(state, item) {
    // TODO: проверять на существование в корзине
    state.cart.push(item)
  },

  REMOVE_ITEM(state, article) {
    const result = state.cart.find((item) => item.article === article)
    state.cart.splice(state.cart.indexOf(result), 1)
  },

  CLEAR_CART(state) {
    state.cart = []
  },

  SET_PRODUCTS_PROPERTIES(state, payload) {
    state.productsProperties = JSON.parse(JSON.stringify(payload))
  },

  SET_FILTERED_PRODUCTS(state, payload) {
    state.productsData.products = payload
  },

  SET_PRODUCTS_FILTER_VALUES(state, payload) {
    state.productsFilters = JSON.parse(JSON.stringify(payload))
  },

  SET_MENU_ROUTES(state, payload) {
    state.menuRoutes = payload
  },

  SET_MENU_DROPDOWNS(state, payload) {
    state.menuDropdowns = payload
  }
}

export const getters = {
  PRODUCT_PROPERTIES(state) {
    return state.productsProperties
  },

  PRODUCT_FILTERS(state) {
    return state.productsFilters
  },

  GET_MENU_ROUTES(state) {
    return state.menuRoutes
  },

  GET_MENU_DROPDOWNS(state) {
    return state.menuDropdowns
  }
}

export const actions = {
  // устанавливает значение текущего города в хранилище
  setCity(context, data) {
    context.commit('SET_CITY', data)
  },

  // получает категории товаров
  getCategories(context) {
    axios.get('/api/getProducts').then((response) => {
      context.commit('GET_CATEGORIES', response.data)
    })
  },

  // получает все товары внутри категории
  getProducts({ commit }, params) {
    return axios
      .get(`/api/getProducts?subcategory=${params.subcategory}`)
      .then((response) => {
        commit('SET_PRODUCTS_DATA', response.data)
      })
      .catch((error) => {
        return error
      })
  },

  // извлекает из списка товаров все свойства для дальнейшей организации фильтров
  setProductsProperties({ commit, state, dispatch }) {
    const propRanges = {}
    for (const item of state.productsData.products) {
      for (const prop of Object.keys(item.properties)) {
        switch (typeof item.properties[prop]) {
          case 'object':
            if (typeof propRanges[prop] === 'undefined') {
              propRanges[prop] = {}
            }

            if (!('min' in propRanges[prop])) {
              propRanges[prop].min = item.properties[prop].value
            } else if (+item.properties[prop].value < propRanges[prop].min) {
              propRanges[prop].min = item.properties[prop].value
            }

            if (!('max' in propRanges[prop])) {
              propRanges[prop].max = item.properties[prop].value
            } else if (+item.properties[prop].value > propRanges[prop].max) {
              propRanges[prop].max = item.properties[prop].value
            }
            propRanges[prop].unit = item.properties[prop].unit
            break

          case 'string':
            if (typeof propRanges[prop] === 'undefined') propRanges[prop] = []
            if (!propRanges[prop].includes(item.properties[prop]))
              propRanges[prop].push(item.properties[prop])
            break
        }
      }
    }
    commit('SET_PRODUCTS_PROPERTIES', propRanges)
  },

  // формирует список фильтров
  setProductsFilters({ commit, state }) {
    const propRanges = state.productsProperties
    const filterValues = {}

    for (const prop in propRanges) {
      const tempArray = []
      switch (propRanges[prop].constructor) {
        case Object:
          filterValues[prop] = propRanges[prop]
          break

        case Array:
          for (const item in propRanges[prop]) {
            tempArray.push({ name: propRanges[prop][item], value: false })
          }
          filterValues[prop] = JSON.parse(JSON.stringify(tempArray))
          break
      }
    }
    commit('SET_PRODUCTS_FILTER_VALUES', filterValues)
  },

  // применение пользовательского фильтра к выборке товаров
  productsFiltering({ state, commit }, params) {
    /**
     * @description Функция фильтрации списка товаров по диапазонам
     * @param {Array.<Object>} Массив товаров
     * @returns {Array} Отфильтрованный массив
     */
    const findThroughRanges = (productsList) => {
      const tempList = []
      productsList.forEach((item, i, arr) => {
        let passFlag = true
        for (const prop in item.properties) {
          if (item.properties[prop].constructor === Object) {
            // сравниваем каждое числовое значение с диапазоном
            if (
              item.properties[prop].value >= state.productsFilters[prop].min &&
              item.properties[prop].value <= state.productsFilters[prop].max
            ) {
              continue
            } else if (passFlag) {
              passFlag = false
            } else break
          }
        }
        if (passFlag) {
          tempList.push(item)
        }
      })
      return tempList
    }

    axios
      .get(`/api/getProducts?subcategory=${params.subcategory}`)
      .then((response) => {
        const result = response.data
        let filteredProducts = []
        const filterBoolArgs = new Set() // множество отмеченных свойств

        // создаём массив булевых свойств фильтра, равных TRUE
        for (const item in state.productsFilters) {
          if (state.productsFilters[item].constructor === Array) {
            for (const i of state.productsFilters[item]) {
              if (i.value === true) {
                filterBoolArgs.add(i.name)
              }
            }
          }
        }

        // ищем по массиву
        result.products.forEach((item, i, arr) => {
          // собираем строковые свойства товара
          const productBoolProps = new Set()
          for (const strProp in item.properties) {
            if (item.properties[strProp].constructor === String) {
              productBoolProps.add(item.properties[strProp])
            } else if (item.properties[strProp].constructor === Array) {
              // если это массив строковых свойств, то добавлять каждое в цикле
            }
          }

          // находим пересечение двух множеств если булевы фильтры вообще заданы
          if (filterBoolArgs.size) {
            if (
              [...productBoolProps].filter((x) =>
                [...filterBoolArgs].includes(x)
              ).length === filterBoolArgs.size
            ) {
              filteredProducts.push(item)
              // формируем список товаров, удовлетворяющих булевым свойствам
            }
          } else if (filteredProducts.length === 0) {
            // клонируем массив
            filteredProducts = arr.slice()
          }
        })
        commit('SET_FILTERED_PRODUCTS', findThroughRanges(filteredProducts))
      })
  },

  // устанавливает текущую категорию
  setCurrentCategory(context, category) {
    context.commit('SET_CURRENT_CATEGORY', category)
  },

  // добавляет товар в корзину
  addToCart(context, item) {
    context.commit('ADD_TO_CART', item)
  },

  // удаляет товар из корзины
  removeItem(context, article) {
    context.commit('REMOVE_ITEM', article)
  },

  // очищает корзину
  clearCart(context) {
    context.commit('CLEAR_CART')
  },

  getMenuRoutes(context) {
    axios.post('/api/getRoutes').then((response) => {
      context.commit('SET_MENU_ROUTES', response.data)

      const dropList = {}
      for (const drop of response.data) {
        dropList[drop.subcategoryName] = { open: false }
      }
      context.commit('SET_MENU_DROPDOWNS', dropList)
    })
  }
}
