import Link from 'next/link';

import Post from 'models/Post';
import PostHeader from './PostHeader';
import PostBody from './PostBody';

import styles from 'styles/components/PostPreview.module.scss';

const PostPreview = ({ post }: { post: Post }) => (
  <Link href='/p/[slug]' as={`/p/${post.slug}`}>
    {/* <a  */}
    <div className={styles.root}>
      <PostHeader allowLinks={false} post={post} />
      {/* <PostBody className={styles.body} allowLinks={false} post={post} /> */}
      <p className={styles.readMore}>Read more...</p>
    </div>
    {/* </a> */}
  </Link>
);

export default PostPreview;
