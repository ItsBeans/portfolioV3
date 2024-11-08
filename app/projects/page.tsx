import Header from "../Header";
import Footer from "../Footer";

const projects = [
  {
    title: "portfolio website",
    description: "the website you are at right now! built with Next.js and Tailwind CSS, showcasing my projects and skills.",
    url: "https://github.com/ItsBeans/portfolioV3",
  },
  {
    title: "natural language translation",
    description: "a machine learning project that fine-tunes models for translation.",
    url: "https://github.com/ItsBeans/translator",
  },
  {
    title: "student exam performance",
    description: "this project analyses and predicts student performance in exams using various features.",
    url: "https://github.com/ItsBeans/student-exam-performance",
  },
  {
    title: "grocery shopping mobile app",
    description: "users can scan the barcode of items and then add them to basket for payment. created for a grocery store.",
    private: true,
  },
  {
    title: "....",
    description: "working on something big",
    comingSoon: true,
  },
   
  // Add more projects here as needed
];


export default function Projects() {
  return (
    <>
    <Header/>
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-6xl font-bold text-black italic mb-12">
        projects <span role="img" aria-label="laptop">💻</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8">a collection of projects showcasing my skills and experience in software engineering, machine learning, and data science.</p>

      <ul className="space-y-8">
        {projects.map((project, index) => (
          <li key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-gray-500 mt-2">{project.description}</p>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-gray-400 text-white font-semibold rounded hover:bg-gray-600 transition-colors"
              >
                view repository
              </a>
            ) : project.comingSoon ? (
              <span className="inline-block mt-4 px-4 py-2 bg-gray-400 text-white font-semibold rounded cursor-not-allowed">
                coming soon
              </span>
            ) : project.private ? (
              <span className="inline-block mt-4 px-4 py-2 bg-gray-400 text-white font-semibold rounded cursor-not-allowed">
              access restricted (university project)
            </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
}

  
  
