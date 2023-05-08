import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';

const TodosLogic = () => {

  const todos = [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: true,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: true,
    },
  ]
  
  return (
    <div>
      <InputTodo />
      <TodosList todosProps={todos} />
    </div>
  );
};

export default TodosLogic;