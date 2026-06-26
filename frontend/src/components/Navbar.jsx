const Navbar = () => {
  return (
    <div className="h-16 bg-white border-b flex justify-between items-center px-8">

      <h2 className="font-semibold text-lg">
        Welcome back, Naincy 👋
      </h2>

      <div className="flex items-center gap-4">
        <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center">
          N
        </div>
      </div>

    </div>
  );
};

export default Navbar;