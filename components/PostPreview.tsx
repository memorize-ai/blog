import Link from 'next/link'

import Post from 'models/Post'
import PostHeader from './PostHeader'

import styles from 'styles/components/PostPreview.module.scss'

const PostPreview = ({ post }: { post: Post }) => (
	<Link href="/p/[slug]" as={`/p/${post.slug}`}>
		<div className={styles.root}>
			<PostHeader allowLinks={false} post={post} />
			<p className={styles.readMore}>Read more...</p>
		</div>
	</Link>
)

export default PostPreview
