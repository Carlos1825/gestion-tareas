document.addEventListener('DOMContentLoaded', function () {
    // Cargar las tareas desde localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(addTaskToList);
  
    // Manejar la adición de nuevas tareas
    document.getElementById('taskForm').addEventListener('submit', function (event) {
      event.preventDefault();
  
      const taskInput = document.getElementById('newTask');
      const taskText = taskInput.value;
  
      if (taskText === '') {
        alert('Por favor, ingresa una tarea.');
        return;
      }
  
      addTaskToList(taskText);
      saveTaskToStorage(taskText);
  
      taskInput.value = ''; // Limpiar el campo de entrada
    });
  });
  
  // Función para agregar tarea a la lista
  function addTaskToList(taskText) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;
  
    // Crear botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function () {
      taskList.removeChild(li);
      removeTaskFromStorage(taskText);
    });
  
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  
    // Permitir marcar como completada
    li.addEventListener('click', function () {
      li.classList.toggle('completed');
    });
  }
  
  // Guardar tarea en localStorage
  function saveTaskToStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Eliminar tarea de localStorage
  function removeTaskFromStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  