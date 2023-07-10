import {posts} from '../data';
import BlogPost from '../components/BlogPost';
import axios from 'axios';

//APIからダミーデータを取得してpostsとしてコンポーネントに渡す
export async function getServerSideProps() {
    const response = await axios.get('http://localhost:3000/api/posts');
    return {
        props: {
            posts: response.data
        }
    };
}

export default function Home({posts}){
    return (
        <div>
            <h1>ブログ一覧</h1>
            {/* ブログ一覧を表示 */}
            {posts.map(post => (
                // <div key={post.id}>
                //     <h2>{post.title}</h2>
                //     {/* ブログの詳細ページへのリンクを作成 */}
                //     <Link href={`/post/${post.id}`}>詳細確認</Link>
                // </div>
                
                //コンポーネントとして上記を外出し
                <BlogPost key = {post.id} post={post} />
            ))}
        </div>
    );
}

