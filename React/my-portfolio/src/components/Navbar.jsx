export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-800 p-4 flex justify-between">
      <h1 className="text-xl font-bold">MyPortfolio</h1>
      <div className="space-x-4">
        <a href="#about" className="hover:text-blue-400">
          About
        </a>
        <a href="#skills" className="hover:text-blue-400">
          Skills
        </a>
        <a href="#projects" className="hover:text-blue-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-400">
          Contact
        </a>
      </div>
    </nav>
  );
}
