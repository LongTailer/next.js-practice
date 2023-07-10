import Link from 'next/link';

export default function BlogPost({post}){
    return(
        <div key = {post.id}>
            <h2>{post.title}</h2>
            <Link href = {`/post/${post.id}`}>詳細確認</Link>
        </div>
    );
}