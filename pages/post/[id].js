import {posts} from '../../data';
import Link from 'next/link';

//ビルド時にNext.jsにどのHTMLページを生成するかを教える。
//パスパラメータを返している？
export async function getStaticPaths(){
    const paths = posts.map(post => ({
        params: {id:post.id.toString()},
    }));
    return {paths,fallback:false};
}

//postのidに基づく詳細を取得。取得したものはPostコンポーネントに渡される。
export async function getStaticProps({params}){
    console.log('params:', params); //log: params の内容を出力
    console.log('posts:', posts);   //log: posts の内容を出力
    const post = posts.find(post => post.id.toString() === params.id.toString());
    return {props : {post}};
}

//getStaticPropsから受け取ったpostを使用してブログの詳細を表示する
const Post = ({post}) => (
    <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Link href ="/"> 
            一覧に戻る
        </Link>
    </div>
);

export default Post;