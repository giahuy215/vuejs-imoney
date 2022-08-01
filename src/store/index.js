import { createStore } from "vuex";
import { projectFireStore } from "@/configs/firebase";

const store = createStore({
    state: {
        transactions: [],
    },

    getters: {
        transactions: state => {
            return state.transactions;
        },
    },

    mutations:{
        setTransactions(state, transactions) {
            state.transactions = transactions;
        }
    },

    actions: {
        fetchTransactions({commit}) {
            projectFireStore
                .collection("transactions")
                .orderBy("time")
                .onSnapshot((querySnapshot) => {
                    var transactions = []
                    querySnapshot.forEach((doc) => {
                        transactions.push(doc.data());
                    });
                    commit("setTransactions", transactions);
                    
                });
        }
    }
}) 

store.dispatch("fetchTransactions");

export default store;