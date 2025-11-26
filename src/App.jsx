import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectsSidebar";
function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
	});
	function handleStartAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	}

	function handleAddProject(projectData) {
		setProjectsState((prevState) => {
			const projectId = Math.random();
			const newProject = { ...projectData, id: projectId };
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	}
	let content;
	if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	} else if (projectsState.selectedProjectId === null) {
		content = <NewProject onAddProject={handleAddProject} />;
	}

	return (
		<>
			<main className="h-screen my-8 flex gap-8">
				<ProjectSidebar
					projects={projectsState.projects}
					onStartAddProject={handleStartAddProject}
				/>
				{content}
			</main>
		</>
	);
}

export default App;
