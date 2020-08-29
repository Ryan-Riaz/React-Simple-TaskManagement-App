import React from "react";

const ToDo = ({ toggleDone, removeTask, id, task, done }) => {
	return (
		<div className="toDo">
			<button onClick={() => toggleDone(id)}>{done ? "-" : "+"}</button>
			<button onClick={() => removeTask(id)}>x</button>
			{done ? <del> {task} </del> : <span> {task} </span>}
		</div>
	);
};

export default ToDo;
