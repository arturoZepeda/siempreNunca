import axios from 'axios';
import { ref, computed } from 'vue';
export default function useDB() {
    const data = ref([]);
    const  error = ref(null);
    //const URL = 'https://siemprenunca.arturozepeda.xyz/posts';
    const URL = 'http://localhost:3000/api/post';
    const postDB  = async (post) => {
        try{
            const res = await axios.post(URL, post);
            data.value = res.data;
        }
        catch(err){
            error.value = err.message;
        }
    }
    /*
    try{
        const postDB = async () => {
            const res = await axios.post(URL,{

            }
                
                
                );
        }
    }
    catch(err){
        error.value = err.message;
    }*/
    return { data, error, postDB };
}