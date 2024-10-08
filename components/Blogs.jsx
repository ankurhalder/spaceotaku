/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { fetchBlogs } from "@/functions/SpaceFlightApi";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const isClient = typeof window !== "undefined";
  const isMobile =
    isClient &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  useEffect(() => {
    async function fetchData() {
      const blogData = await fetchBlogs(page);
      setBlogs((prevBlogs) => [...prevBlogs, ...blogData]);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      (isClient &&
        (!isMobile ||
          window.innerHeight + window.pageYOffset >=
            document.documentElement.offsetHeight)) ||
      (isClient &&
        isMobile &&
        window.innerHeight + window.pageYOffset + 100 >=
          document.documentElement.offsetHeight)
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (isClient) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (isClient) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="blogs">
      <h3>Blogs</h3>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h4>{blog.title}</h4>

            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-url"
            >
              URL: {blog.url}
            </a>

            {blog.image_url && <img src={blog.image_url} alt={blog.title} />}
            <div className="blog-additional-details">
              <div className="summary">
                <p>Summary:</p>
                <span>{blog.summary}</span>
              </div>
              <div className="published">
                <p>Published:</p>
                <span>{blog.published_at}</span>
              </div>
              <div className="news-site">
                <p>News Site:</p>
                <span>{blog.news_site}</span>
              </div>
              <div className="featured">
                <p>Featured:</p>
                <span>{blog.featured ? "Yes" : "No"}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Blogs;
