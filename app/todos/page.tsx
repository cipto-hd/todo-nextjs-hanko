import { Logout } from "@/components/Logout";
import { Profile } from "@/components/Profile";
import { NewTodo } from "@/components/todos/NewTodo";
import { TodoItem } from "@/components/todos/TodoItem";
import { prisma } from "@/db";

import { userId } from "../api/todos/route";

export default async function todos() {
  const userID = await userId();

  const todos = await prisma.todo.findMany({
    where: {
      userId: { equals: userID },
    },
  });

  return (
    <main className=" flex flex-col min-h-screen justify-center items-center bg-gray-900 relative ">
      <div className="absolute top-4 left-16">
        <div className=" relative py-4 space-x-6">
          <Profile />
          <Logout />
        </div>
      </div>
      <div className="bg-slate-300 rounded-3xl py-6  h-[400px] w-[450px] flex flex-col text-slate-800">
        <h1 className="text-3xl text-center">My to dos</h1>
        <NewTodo />
        <ul className="px-6">
          <TodoItem todos={todos} />
        </ul>
      </div>
    </main>
  );
}
