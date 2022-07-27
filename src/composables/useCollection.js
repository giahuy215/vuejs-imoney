import { ref } from "vue";
import { projectFireStore } from "@/configs/firebase"

const useCollection = (name) => {
    const error = ref(null);
    async function addRecord(record) {
        error.value = null;
        try {
            const response = await projectFireStore.collection(name).add(record);
            return response;
        } catch (err) {
            console.log(err);
            error.value = err.message;
        } 
    }
    return { addRecord, error }
}

export default useCollection