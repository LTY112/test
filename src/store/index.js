import Vue from "vue";
import Vuex,{Store} from "vuex";
import mokuai from "./mokuai"

Vue.use(Vuex);

var store =new Store({
    modules:{
        mokuai
    }

})

export default store;