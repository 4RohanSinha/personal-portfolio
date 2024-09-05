import Markdown from "react-markdown";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState, useContext } from "react";
import { BlogViewContext, TabContext } from "./TabContext";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import { marked } from "marked";

function truncateAfterNewlines(content, maxNewlines, maxSpaces) {
  let newlineCount = 0;
  let index = 0;
  let spaceCount = 0;

  for (index = 0; index < content.length; index++) {
    if (content[index] == " ") {
      spaceCount++;

      if (spaceCount >= maxSpaces) {
        break;
      }
    }
    if (content[index] === "\n" && content[index - 1] != "\n") {
      newlineCount++;
      if (newlineCount >= maxNewlines) {
        // break;
      }
    }
  }

  if (index === content.length) {
    return content;
  }

  return content.slice(0, index) + "...";
}

function markdownToPlainText(markdown) {
  // Convert Markdown to HTML
  const html = marked(markdown);
  // Create a temporary element to extract text
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || "";
}

export const BlogPreview = (props) => {
  const storage = getStorage();
  const [data, setData] = useState(null);
  const { blogsText, setBlogsText, curBlog, setCurBlog } =
    useContext(BlogViewContext);
  const { tab, setTab } = useContext(TabContext);

  useEffect(() => {
    const getDocument = async () => {
      if (blogsText[props.blog.document]) {
        setData(blogsText[props.blog.id + ".md"]);
        return;
      }
      const url = await getDownloadURL(ref(storage, props.blog.id + ".md")).then(
        (url) => url
      );

      await fetch(url)
        .then((response) => response.text())
        .then((response) => {
          setData(response);
          setBlogsText({
            ...blogsText,
            [props.blog.id + ".md"]: response,
          });
        });
    };

    getDocument();
  }, [props.blog.id]);
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-10 shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
      <h1 className="text-2xl font-bold" style={{ marginBottom: "7%" }}>
        {data ? props.blog.title : "Loading..."}
      </h1>
      <div className="markdown-preview">
        <p>
          {data
            ? truncateAfterNewlines(markdownToPlainText(data), 4, 20)
                .replace(/\s+/g, " ")
                .trim()
            : ""}
        </p>
      </div>
      {!props.hideLink && data ? (
        <a
          href={`/blog/${props.blog.id}`}
          onClick={() => {
            setTab(3);
            setCurBlog(data);
          }}
          style={{ marginTop: "7%" }}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
            />
          </svg>
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};
