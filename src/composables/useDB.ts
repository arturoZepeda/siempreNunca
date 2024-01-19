import axios from 'axios';
import { ref, computed } from 'vue';
export default function useDB() {
    const data = ref([]);
    const  error = ref(null);
    //const URL = 'https://siemprenunca.arturozepeda.xyz/posts';
    const URL = 'http://localhost:3000/api/post';
    const postDB  = async (post: any) => {
        try{
            const res = await axios.post(URL, post);
            data.value = res.data;
        }
        catch(err: any){
            error.value = err.message;
        }
    }
    const getDB = async () => {
        const URL = 'http://localhost:3000/api/getAll';
        try{
            const res = await axios.get(URL);
            data.value = res.data;
        }
        catch(err: any){
            error.value = err.message;
        }
    }
    return { data, error, postDB, getDB };
}