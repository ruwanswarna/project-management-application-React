import { useState } from "react";
export default function NewTask({ onAdd }) {
	const [userInput, setUserInput] = useState("");

	function handleChange(event) {
		setUserInput(event.target.value);
	}
	function handleClick() {
		if (userInput.trim() === "") {
			return;
		}
		onAdd(userInput);
		setUserInput("");
	}
	return (
		<div className="flex tiems-center gap-4">
			<input
				value={userInput}
				onChange={handleChange}
				type="text"
				className="w-64 px-2 py-1 rounded-sm bg-stone-200"
			/>
			<button
				onClick={handleClick}
				className="text-stone-700 hover:text-stone-950"
			>
				Add Task
			</button>
		</div>
	);
}
