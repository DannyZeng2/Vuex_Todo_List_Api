import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

export default {
    async addItem(data) {
        const res = await axios({
            url: 'http://localhost:8088/items',
            method: 'post',
            data: JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        });
        return res;
    },

    // async getItems() {
    //     const res = axios.get('/api/items');
    //     return res;
    // },

    // async editItem(data) {
    //     const res = await axios({
    //         url: '/api/items/'+data.id,
    //         method: 'put',
    //         data: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     return res;
    // },

    

}