import styles from './PostLayout.module.css'
import { useState } from 'react';
import UserInfo from '../UserInfo/UserInfo';

function PostLayout({ post }) {
    const [show, setShow] = useState(false);

    return (
        <div className={styles.postLayout}>
            <h3 className={styles.postTitle}>
                {post.title}
            </h3>

            <p className={styles.postBody}>
                {post.body}
            </p>

            <button className={styles.readMoreBtn} onClick={() => {setShow(!show)}}>
                Visa användarinfo
            </button>
            {show && <UserInfo userId={post.userId} />}
        </div>
    );
}

export default PostLayout;