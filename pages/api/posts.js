import axios from 'axios';

export default async (req,res) => {
    try{
        //JSONPlaceholder:実際のAPIのような挙動を模倣するJSON形式のデータを取得することがでる。
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        res.status(200).json(response.data);
    }catch(error){
        res.status(500).send(error);
    }
};