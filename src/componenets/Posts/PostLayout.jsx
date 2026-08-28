import styles from './PostLayout.module.css'

function PostLayout({ post }) {
    return (
        <div className={styles.postLayout}>
            <h3 className={styles.postTitle}>
                {post.title}
            </h3>

            <p className={styles.postBody}>
                {post.body}
            </p>

            <button className="readMoreBtn">
                Visa användarinfo
            </button>
        </div>
    );
}

export default PostLayout;