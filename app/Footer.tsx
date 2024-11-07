import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full py-8 flex justify-center space-x-6 ">
      <a href="https://www.linkedin.com/in/benediktas-rocys/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin className="text-gray-600 hover:text-black w-6 h-6" />
      </a>
      <a href="https://github.com/itsbeans" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub className="text-gray-600 hover:text-black w-6 h-6" />
      </a>
      <a href="mailto:bennyrocys@gmail.com" aria-label="Gmail">
        <FaEnvelope className="text-gray-600 hover:text-black w-6 h-6" />
      </a>
    </footer>
  );
}
