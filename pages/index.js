import {posts} from '../data';
import Link from 'next/link';

export default function Home(){
    return (
        <div>
            <h1>ブログ一覧</h1>
            {/* ブログ一覧を表示 */}
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    {/* ブログの詳細ページへのリンクを作成 */}
                    <Link href={`/post/${post.id}`}>詳細確認</Link>
                </div>
            ))}
        </div>
    );
}
// export default function Home() {
//     return <div>Hello, world!</div>;
//   }