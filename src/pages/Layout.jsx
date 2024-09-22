function Layout() {
  return (
    <div className="grid h-full grid-rows-layout">
      <header className="flex justify-between items-center p-8">
        <h1 className="text-2xl font-bold"></h1>
        <nav className="flex gap-8 justify-between items-center"></nav>
        <div className="flex gap-4 items-center"></div>
      </header>
    </div>
  );
}

export default Layout;
