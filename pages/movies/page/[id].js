import Link from 'next/link';
import { Pagination } from '../../components/Pagination';

const PER_PAGE = 5; 

// pages/blog/[id].js
export default function BlogPageId({ blog, totalCount }) {
  return (
    <div>
      <ul>
        {blog.map(blog => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={totalCount} />
    </div>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const id = 1;
  const tags = 'ジャルジャル'
  const res = await fetch(`https://jarujarudb.vercel.app/api/moviesdb/moviesdb?page=${id}&tag=${tags}`)
  //const res = await fetch('https://your-service.microcms.io/api/v1/blog')

  const repos = await res.json();

  console.log(repos)

  const respo = repos.rows

  const pageNumbers = [];

  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) =>  `/movies/page/${repo}`)

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const tag='ジャルジャル';

  const data = await fetch(`https://jarujarudb.vercel.app/api/moviesdb/moviesdb?page=${id}&tag=${tag}`).then(res => res.json()).catch(() => null)
  console.log('\n\ndata:',data)
  console.log(data.totalCount)
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount
    }
  };
};