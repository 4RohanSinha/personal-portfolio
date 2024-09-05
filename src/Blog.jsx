import { useEffect, useState, useContext } from "react";
import { BlogViewContext, TabContext } from "./TabContext";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound.jsx";
import Loading from "./Loading.jsx";
import 'prismjs/themes/prism-tomorrow.css'; // Choose a Prism theme for syntax highlighting

export const Blog = (props) => {
  const { blogsText, setBlogsText, curBlog, setCurBlog } =
    useContext(BlogViewContext);
  const { tab, setTab } = useContext(TabContext);
  const [found, setFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const { blogId } = useParams();

  const storage = getStorage();

  useEffect(() => {
    setTab(2);
    const getDocument = async () => {
      if (blogsText[blogId]) {
        setData(blogsText[blogId]);
        return;
      }

      setLoading(true);
      try {
        const url = await getDownloadURL(ref(storage, blogId + ".md")).then(
          (url) => url
        );

        await fetch(url)
          .then((response) => response.text())
          .then((response) => {
            setCurBlog(response);
            setBlogsText({
              ...blogsText,
              [blogId]: response,
            });
            setLoading(false);
            setFound(true);
          });

          
      } catch (error) {
        setLoading(false);
        setFound(false);
      }
    };

    if (!curBlog) getDocument();
  }, []);

  if (loading) return <Loading />;
  if (!loading && !found) return <NotFound />;
  return (
    <div
      className="mt-5 text-left align-top flex items-start absolute top-5"
      style={{ paddingTop: "10%" }}
    >
      <div
        className="flex items-start justify-between items-align"
        style={{ marginLeft: "10%", marginRight: "15%" }}
      >
        <a
          href="/blog"
          className="me-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
              transform="scale(-1, 1) translate(-14, 0)"
            />
          </svg>
          Back
        </a>
        <div>
          <Markdown rehypePlugins={[rehypeRaw, rehypePrismPlus]} remarkPlugins={[remarkBreaks, remarkGfm]}>
            {curBlog ? curBlog : "Loading..."}
          </Markdown>
        </div>
      </div>
    </div>
  );
};
