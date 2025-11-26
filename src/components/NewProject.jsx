import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({ onAddProject }) {
	const modal = useRef();
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();
	function handleSave() {
		const enteredTitle = title.current.value;
		const enteredDesc = description.current.value;
		const enteredDueDate = dueDate.current.value;

		//validation
		if (
			enteredTitle.trim() === "" ||
			enteredDesc.trim() === "" ||
			enteredDueDate.trim() === ""
		) {
			modal.current.open();
			return;
		}

		onAddProject({
			title: enteredTitle,
			description: enteredDesc,
			dueDate: enteredDueDate,
		});
	}
	return (
		<>
			<Modal ref={modal} buttonCaption="Close">
				<h2>Invalid Input!</h2>
				<p>Oops ... forgot to enter a value.</p>
				<p>Provide a valid value for every input.</p>
			</Modal>
			<div className="w-[35rem] mt-16 ">
				<menu className="flex items-center justify-end gap-4 my-4">
					<button className="text-stone-800 hover:text-stone-950 ">
						Cancel
					</button>
					<button
						onClick={handleSave}
						className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950"
					>
						Save
					</button>
				</menu>
				<div>
					<Input type="text" ref={title} label="Title" />
					<Input ref={description} label="Description" isTextarea />
					<Input type="date" ref={dueDate} label="Due Date" />
				</div>
			</div>
		</>
	);
}
