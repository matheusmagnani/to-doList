export function HasNoTasks() {
  return (
    <div className="p-[64px] flex flex-col items-center border-t-[1px] border-gray-400">

      <img src="../assets/clipboard.svg" />
      <p className="text-gray-300 font-bold text-[16px] mt-[16px]">Você ainda não tem tarefas cadastradas</p>
      <p className="text-gray-300 text-[16px]">Crie tarefas e organize seus itens a fazer</p>
              
    </div>
  );
}