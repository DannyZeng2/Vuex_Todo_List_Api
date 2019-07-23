import Vue from 'vue'
import Vuex from 'vuex'
import API from '../api/http.js'

Vue.use(Vuex,API)


export default new Vuex.Store({
    state: {
        items: [],
        status: "All",
        
    },
    getters:{
        getItems(state){
            return state.items
        },
        getStatus(state){
            return state.status
        },

    },
    mutations: {
        editItem(state,id) {
            state.items[id - 1].isEdit = true;
        },

        finishEdit(state,id) {
            state.items[id - 1].isEdit = false;
        },

        add(state,todoItem) {
            var id = state.items.length + 1;
            var newItems = { id: id, name:todoItem, active: false, isEdit: false };
            state.items.push(newItems);
            
            
        },
        sendStatus(state,flag) {
            state.status = flag;
        }
        
    },

    
    actions: {        
        async addTodoItem(context,items){
            const res = await API.addItem(items);
            if(res.status === 201){
                context.commit('add',res.data);
            }
        },
        async updateItem(context,todo){
            const res = await API.finishEdit(todo);
            if(res.status === 200){
                context.commit('editItem',-1);
            }
        },

    }



    
})