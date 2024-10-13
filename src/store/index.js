import { createStore } from 'vuex'
import CounterModule from './module/counter';
import listProductModule from './module/listProduct';
import listUserModule from './module/listUser';
import profileModule from './module/profile';
import randomNumbersModule from './module/randomNumbers';
import changeStateModule from './module/changeState';
import darkModeModule from './module/darkMode';

const store = createStore({
  modules: {
    CounterModule,
    listProductModule,
    listUserModule,
    profileModule,
    randomNumbersModule,
    changeStateModule,
    darkModeModule,  
  }
})

export default store
