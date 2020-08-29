import React from "react";
import ToDo from "./ToDo";
import Clock from "./Clock";

// Built-in Data
const data = [
	{
		id: 1,
		task: "Go to Gym",
		done: false,
	},
	{
		id: 2,
		task: "Buy groceries",
		done: true,
	},
	{
		id: 3,
		task: "Do Programming",
		done: true,
	},
	{
		id: 4,
		task: "Chat with favorite friends",
		done: false,
	},
];

const ToDoList = () => {
	const [currentId, setCurrentId] = React.useState(data[data.length - 1].id);
	const [todos, setTodos] = React.useState([...data]);
	const [inputVal, setInputVal] = React.useState("");

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && inputVal !== "") {
			setTodos((currentTodos) => [
				{
					id: currentId + 1,
					task: inputVal,
					done: false,
				},
				...currentTodos,
			]);

			setInputVal("");
			setCurrentId((id) => id + 1);
		}
	};

	const handleChange = (e) => {
		setInputVal(e.target.value);
	};

	const removeTask = (id) => {
		setTodos((currentTodos) =>
			currentTodos.filter((todo) => todo.id !== id)
		);
	};

	const toggleDone = (id) => {
		setTodos((currentTodos) =>
			currentTodos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						done: !todo.done,
					};
				}
				return todo;
			})
		);
	};

	return (
		<div className="toDoList">
			<h1>Track Your Task</h1>
			<Clock />
			<input
				type="text"
				placeholder="Add your task here!"
				value={inputVal}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>

			{todos.map((todo) => (
				<ToDo
					{...todo}
					key={todo.id}
					removeTask={removeTask}
					toggleDone={toggleDone}
				/>
			))}
		</div>
	);
};

export default ToDoList;
