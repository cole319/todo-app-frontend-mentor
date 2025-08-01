import TodoTable from "@/components/TodoTable";
import ToggleButton from "@/components/ToggleButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/bg-desktop-light.jpg')] bg-no-repeat bg-fixed bg-top bg-contain bg-slate-200 relative font-josefin-custom">
      <ToggleButton />
      <TodoTable />
    </div>
  );
}
