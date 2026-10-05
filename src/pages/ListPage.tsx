import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
function ListPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [search, setSearch] = useState("");
  function getTodos() {
    axios.get("http://localhost:3000/todos").then((res) => {
      console.log(res.data);
      setTodos(res.data);
    });
  }
  useEffect(() => {
    getTodos();
  }, []);
  function deleteTodo(id: number) {
    axios.delete(`http://localhost:3000/todos/${id}`).then(() => {
      getTodos();
    });
  }

  function SearchTodo(title: string) {
    axios.get(`http://localhost:3000/todos?title_like=${title}`).then((res) => {
      console.log(res.data);
      setTodos(res.data);
    });
  }
  return (
    <div className="p-6">
      <div className="mb-6 flex gap-4">
        <form
          className="mb-6 flex gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            SearchTodo(search);
          }}
        >
          <input
            className="border"
            type="text"
            placeholder="tìm kiếm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="border" type="submit">
            search
          </button>
        </form>
      </div>

      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Status
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {todos.map((item) => {
              return (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">
                    {item.id}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {item.title}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {item.completed ? "Completed" : "Not Completed"}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button
                      className="border"
                      onClick={() => deleteTodo(item.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
