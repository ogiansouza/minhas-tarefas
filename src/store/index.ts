import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/tarefas'

const Store = configureStore({
  reducer: {
    tarefas: tarefasReducer
  }
})

export type RootReducer = ReturnType<typeof Store.getState>

export default Store
