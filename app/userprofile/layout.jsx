import Sidebar from "./Sidebar";

export default function UserProfileLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-[#f5f0eb]">
      
      {/* Sidebar (FIXED) */}
      <Sidebar />


      <main className="flex-1 px-6 py-8">
        {children}
      </main>

    </div>
  );
}