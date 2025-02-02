import { useEffect, useState } from "react";
import { useUser } from "../lib/context/user";
import { useIdeas } from "../lib/context/ideas";

export function Home() {
  const user = useUser();
  console.log(user);
  const ideas = useIdeas();
  console.log(ideas);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
   const [ideaList, setIdeaList] = useState([])

   useEffect(() => {
    if(ideas.current){
        setIdeaList([...ideas.current])
    }
   }, [ideas?.current])

   console.log(ideaList)
  const handleSubmit = async () => {
    try {
      await ideas?.add({ userId: user?.current?.$id, title, description });
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      {user?.current ? (
        <section className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Add Idea
          </h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-400 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-400 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </section>
      ) : (
        <section>
            <p>
                Please login to submit an idea.
            </p>
        </section>
      )}
        <section className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Latest Ideas
          </h2>
          <ul className="space-y-4">
            {ideaList?.length ? (
              ideaList.map((idea) => (
                <li key={idea.$id} className="p-4 bg-gray-50 rounded-lg border">
                  <strong className="block text-lg text-gray-900">
                    {idea.title}
                  </strong>
                  <p className="text-gray-700 mt-2">{idea.description}</p>
                  <button
                    onClick={() => ideas?.remove(idea.$id)}
                    type="button"
                    className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-600">No ideas found.</p>
            )}
          </ul>
        </section>
    </main>
  );
}

export default Home;
