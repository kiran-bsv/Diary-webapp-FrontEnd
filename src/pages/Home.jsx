import { useEffect } from 'react';
import { RotateLoader } from 'react-spinners';
import { usePostsContext } from '../hooks/usePostsContext';
import { useAuthContext } from '../hooks/useAuthContext.js';
import PostHead from '../components/PostHead';
import styles from '../styles/styles.module.scss';
import PostForm from '../components/PostForm';


const Home = () => {
    // const [posts, setPosts] = useState(null);
    const { posts, dispatch } = usePostsContext();
    const { user } = useAuthContext();

    useEffect(()=>{
        const fetchPosts = async () =>{
            const response = await fetch('https://lastwild-diary-api.onrender.com/api/posts',{
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();
            // console.log(json);

            if (response.ok) dispatch({ type: 'SET_POSTS', payload: json }); //setPosts(json);
        }

        if (user) fetchPosts();
    }, [user, dispatch]);

    if (!posts) {
        return (
            <div className="spinner">
                <RotateLoader color="#36d7b7"
                    size={12}
                />
            </div>
        );
    }

    return(
        <>
            <div>
                <h1> Posts </h1>
                <ul className={styles.postList}>
                    {posts && posts.map(post => (
                        <PostHead key={post._id} post={post} />
                    ))}
                </ul>
            </div>
            <div>
                <PostForm />
            </div>
        </>
    );
};

export default Home;
