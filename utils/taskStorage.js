export const getTasks = () => {
  if (typeof window === "undefined") {
    return [];
  }

  const savedTasks = localStorage.getItem("studyTasks");

  if (!savedTasks) {
    return [];
  }

  return JSON.parse(savedTasks);
};

export const saveTasks = (tasks) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("studyTasks", JSON.stringify(tasks));
  }
};