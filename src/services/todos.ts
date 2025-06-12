export const getTodos = async () => {
  const response = await fetch(`${process.env.API_URL}/todos`);
  if (!response.ok) throw new Error("Failed to fetch todos");
  const { todos } = await response.json();
  return todos;
};
