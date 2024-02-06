import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'

const Store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof Store.getState>

export default Store
