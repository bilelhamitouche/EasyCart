function Layout() {
  return (
    <div className="grid h-full grid-rows-layout">
      <header className="flex justify-between items-center p-8">
        <h1 className="text-2xl font-bold"></h1>
        <nav className="flex gap-8 justify-between items-center"></nav>
        <div className="flex gap-4 items-center"></div>
      </header>
      <footer className="flex flex-col justify-center items-center p-8">
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <div className="flex gap-2 justify-center items-center"></div>
        <p className="text-sm">Copyright &copy; Bilel Hamitouche 2024.</p>
      </footer>
    </div>
  );
}

export default Layout;
