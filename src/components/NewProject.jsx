import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({ onAddProject, onCancel }) {
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
    function handleCancel(){

    }
	return (
		<>
			<Modal ref={modal} buttonCaption="Close">
				<h2 className="text-xl font-bold text-stone-500 my-4 ">Invalid Input!</h2>
				<p className="text-stone-400 mb-4">Oops ... forgot to enter a value.</p>
				<p className="text-stone-400 mb-4">Provide a valid value for every input.</p>
			</Modal>
			<div className="w-[35rem] mt-16 ">
				<menu className="flex items-center justify-end gap-4 my-4">
					<button onClick={onCancel} className="text-stone-800 hover:text-stone-950 ">
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
