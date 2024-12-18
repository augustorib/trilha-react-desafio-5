import { supabase } from '../services/api'

export const getPosts = async () => {

    const { data } = await supabase
      .from('posts')
      .select('*'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    const { data } = await supabase
    .from('posts') 
    .select('*') 
    .eq('id', id); 

    if (data && data.length > 0) {
        return data[0]; 
    }

    return {}
}