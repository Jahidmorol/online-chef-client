import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from '../shared/Loading';

const Blog = () => {
    const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  
    return (
        <div>
            <p>blogs comming soooooon just waite...</p>
        </div>
    );
};

export default Blog;