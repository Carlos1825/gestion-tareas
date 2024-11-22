const agregarTareaALista = (tarea) => {
    const listaTareas = document.querySelector('#listaTareas');
    const item = document.createElement('li');
    item.textContent = tarea.descripcion;
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = async () => {
        await fetch(`http://localhost:3000/tareas/${tarea.id}`, { method: 'DELETE' });
        listaTareas.removeChild(item);
    };
    item.appendChild(botonEliminar);
    listaTareas.appendChild(item);
};

const agregarTarea = async () => {
    const descripcion = document.querySelector('#nuevaTarea').value;
    if (descripcion.trim() === '') {
        alert('Por favor, ingresa una descripción para la tarea');
        return;
    }
    const response = await fetch('http://localhost:3000/tareas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descripcion }),
    });
    const tarea = await response.json();
    agregarTareaALista(tarea);
    document.querySelector('#nuevaTarea').value = '';
};

const obtenerTareas = async () => {
    const response = await fetch('http://localhost:3000/tareas');
    const data = await response.json();
    data.tareas.forEach((tarea) => agregarTareaALista(tarea));
};

document.addEventListener('DOMContentLoaded', obtenerTareas);