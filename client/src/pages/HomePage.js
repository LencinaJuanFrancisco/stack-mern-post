import React from "react";
import { usePosts } from "../context/postsContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";

function HomePage() {
  const { posts } = usePosts();

  if (posts.length === 0)
    return (
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-white text-2xl "> NO hay Post !!! </h2>
        <VscEmptyWindow className="w-40 h-40 text-white  "></VscEmptyWindow>
      </div>
    );

  return (
    <>
      <div className="text-white">
        <header className="flex justify-between py-4">
            <h2 className="text-white text-2xl font-bold">Home Pages ({posts.length})</h2>
          <Link to="/new" className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600"> Creat new Post</Link>

        </header>
        <div className="grid grid-cols-3 gap-2">
          {posts.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </div>
      </div>
    </>
  );
}
export { HomePage };
