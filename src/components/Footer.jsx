function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center p-8">
      <Link to="/home">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <div className="flex gap-2 justify-center items-center"></div>
      <p className="text-sm">Copyright &copy; Bilel Hamitouche 2024.</p>
    </footer>
  );
}

export default Footer;
