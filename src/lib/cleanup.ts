import fs from "node:fs";
import path from "node:path";

const pathsToDelete = [
  "src/app/api/todos",
  "src/components/todo-list.tsx",
  "src/services/todos.ts",
  "src/lib/cleanup.ts",
];

const resetHomePage = () => {
  const fullPath = path.join(process.cwd(), "src/app/page.tsx");
  const content = `
"use server";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
} 

export default HomePage;
`;

  fs.writeFileSync(fullPath, content, "utf-8");
  console.log(`🔄 Reset content of: "src/app/page.tsx"`);
};

const deletePath = (targetPath: string) => {
  const fullPath = path.join(process.cwd(), targetPath);
  if (!fs.existsSync(fullPath)) return;
  const stats = fs.statSync(fullPath);
  if (stats.isDirectory()) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`🗂️ Removed directory: ${targetPath}`);
  } else {
    fs.unlinkSync(fullPath);
  }
  console.log(`🗑 Removed file: ${targetPath}`);
};

resetHomePage();
pathsToDelete.forEach(deletePath);
