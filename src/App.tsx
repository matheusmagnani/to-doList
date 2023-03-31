import { PlusCircle } from "@phosphor-icons/react";

import { HasNoTasks } from "./components/HasNoTasks"
import { Task } from "./components/Task";

export function App() {

  return (
    <div >
        <header className="bg-gray-700 h-52 flex items-center justify-center">
          <img
          className="h-12 w-32" 
          src="../assets/logo.svg" 
          alt="Logo" />
        </header>
        <main className="h-screen bg-gray-600 flex flex-col items-center">
          <div className="flex justify-center gap-[8px]">
            <input 
            className="bg-gray-500 border border-gray-700 rounded-lg p-[16px] w-[638px] h-[54px] mt-[-27px] text-gray-100 text-[16px] placeholder:text-gray-300 placeholder:text-[16px] focus:outline-0 focus:border-purple-dark" 
            placeholder="Assine uma nova tarefa" 
            type="text" />
            <button 
              className="bg-blue-dark w-[90px] h-[52px] rounded-lg text-gray-100 text-[14px] flex items-center justify-center gap-2 mt-[-26px] hover:bg-blue-light"
              type="submit"
            >
                Criar <PlusCircle size={16}/></button>

          </div>

          <div className=" text-gray-100 mt-[64px] w-[736px]">
            <div className="pb-[24px] flex flex-row justify-between justify-center ">

              <p className="text-blue-light font-bold text-[14px] ">Tarefas criadas
               <span className="ml-[8px] bg-gray-400 text-gray-200 rounded-full py-0.5 px-2">0</span>
              </p>

              <p className="text-purple-light font-bold text-[14px]">Concluídas
               <span className="ml-[8px] bg-gray-400 text-gray-200 rounded-full py-0.5 px-2">0</span>
              </p>

            </div>

            <Task/>
            <Task/>
            <Task/>
            <Task/>
            
          </div>

        </main>
        
    </div>
  )
}

