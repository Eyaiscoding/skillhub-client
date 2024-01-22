// removed     <TaskForm onAdd={addTask} /> under h2

import './toDoListPage.styles.css';
import TaskForm from "../../components/forms/taskForm/TaskForm";
import Task from "../../components/layouts/tasks/Task";
import {useEffect, useState} from "react";

const ToDoList = () => {
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks || []);
  }, []);

  function addTask(name) {
    setTasks(prev => {
      return [...prev, {name:name,done:false}];
    });
  }

  function removeTask(indexToRemove) {
    setTasks(prev => {
      return prev.filter((taskObject,index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = numberComplete/numberTotal * 100;
    if (percentage === 0) {
      return 'Add a task to get started !';
    }
    if (percentage === 100) {
      return 'You completed all your tasks !';
    }
    return 'You have '+ (numberTotal-numberComplete) +' task(s) to complete';
  }

  function renameTask(index,newName) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    })
  }

  return (
    <main className="m1">
    <a href="/" className="logoR"> RFC <span className="text-primary">SkillHub</span> </a>
      <h1 className="h1R">{numberComplete}/{numberTotal} Completed</h1>
      <h2 className="h2R">{getMessage()}</h2>
  
      {tasks.map((task,index) => (
        <Task {...task}
              onRename={newName => renameTask(index,newName)}
              onTrash={() => removeTask(index)}
              onToggle={done => updateTaskDone(index, done)} />
      ))}
    </main>
  );
}

export default ToDoList;