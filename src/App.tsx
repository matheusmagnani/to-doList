import { useState } from "react";
import { Task } from "./components/Task";
import { HasNoTasks } from "./components/HasNoTasks";

import { PlusCircle } from "@phosphor-icons/react";

export interface ITask {
  id: number;
  description: string;
  completed: boolean;
}

export const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleNewTask = () => {
    if (newTaskDescription.trim() === "") return;

    const newTask: ITask = {
      id: Math.random(),
      description: newTaskDescription,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskDescription("");
  };

  const handleComplete = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
  };

  const handleRemove = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);

    console.log(tasks)
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div >
        <header className="bg-gray-700 h-52 flex items-center justify-center">
          <img
          className="h-12 w-32" 
          src="../assets/logo.svg" 
          alt="Logo" />
        </header>
        <main className="h-screen flex flex-col items-center">
          <div className="flex justify-center gap-[8px]">
            <input
              type="text"
              placeholder="Assine uma nova tarefa" 
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
              className="bg-gray-500 border border-gray-700 rounded-lg p-[16px] w-[638px] h-[54px] mt-[-27px] text-gray-100 text-[16px] placeholder:text-gray-300 placeholder:text-[16px] focus:outline-0 focus:border-purple-dark" 
            />
            <button 
              onClick={handleNewTask}
              className="bg-blue-dark w-[90px] h-[52px] rounded-lg text-gray-100 text-[14px] flex items-center justify-center gap-2 mt-[-26px] hover:bg-blue-light"
              
            >
                Criar <PlusCircle size={16}/></button>

          </div>

          <div className=" text-gray-100 mt-[64px] w-[736px]">
            <div className="pb-[24px] flex flex-row justify-between justify-center ">

              <p className="text-blue-light font-bold text-[14px] ">Tarefas criadas
               <span className="ml-[8px] bg-gray-400 text-gray-200 rounded-full py-0.5 px-2">{totalTasks}</span>
              </p>

              <p className="text-purple-light font-bold text-[14px]">Concluídas
               <span className="ml-[8px] bg-gray-400 text-gray-200 rounded-full py-0.5 px-2">{completedTasks}</span>
              </p>

            </div>

            {tasks.length === 0 ? <HasNoTasks/> : tasks.map((task) => (
  
 
                <Task
                    key={task.id}
                    id={task.id}
                    description={task.description}
                    completed={task.completed}
                    onComplete={() => handleComplete(task.id)}
                    onRemove={() => handleRemove(task.id)}
                  />
                ))}
            
          </div>

        </main>
        
    </div>
  )
};


