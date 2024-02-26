import axios from 'axios';
import { ref, computed } from 'vue';
export default function useDB() {
    const data = ref([]);
    const datos = ref([]);
    const  error = ref(null);
    const preUrl = 'https://apisiemprenunca.arturozepeda.xyz/api/';
    const postDB  = async (post) => {
        const URL = preUrl + 'post';
        try{
            const res = await axios.post(URL, post);
            data.value = res.data;
        }
        catch(err){
            error.value = err.message;
        }
    }
    const getDB = async () => {
        const URL = preUrl + 'getAll';
        try{
            const res = await axios.get(URL);
            datos.value = res.data;
        }
        catch(err){
            error.value = err.message;
        }
    }
    return { data, datos, error, postDB, getDB };
}
