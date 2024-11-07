import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Home() {
  return (
    <>
     <Header />
     <div className="max-w-3xl mx-auto p-12 text-left ">
    <h1 className="text-6xl font-bold text-black italic mb-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>
  welcome to my portfolio
</h1>
<div className="flex flex-col md:flex-row md:space-x-8 md:gap-12">
        {/* Left Column: Text Content */}
        <div className="flex-grow mb-8 md:mb-0 md:w-2/3">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed space-y-6">
          my name is Benny <span className="font-semibold">(Beans is my nickname)</span>.
            <br/>
            <br/>
            i’m a 21-year-old software engineer based in <span className="font-semibold">London</span>.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            i just finished my undergrad degree in <span className="font-semibold">Computer Science with Artificial Intelligence</span> at <span className="font-semibold">King’s College London</span>.
          </p>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
            <li>i'm really interested in <span className="font-semibold">data and machine learning</span></li>
            <li>i enjoy <span className="font-semibold">reading</span>, <span className="font-semibold">music</span>, <span className="font-semibold">chess</span>, and <span className="font-semibold">eating good food</span>.</li>
          </ul>
          <p className="text-lg text-gray-700 mt-4">long term, i want to build something <span className="font-semibold">impactful</span> :)</p>
        </div>

        {/* Right Column: Spotify Embed */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <p className="text-lg text-gray-600 mb-4">
            my coding/study playlist.
          </p>
          <iframe
            src="https://open.spotify.com/embed/playlist/7JkhowzVjYYGoLTtMDbIld?si=be476ad9f88c48e1"
            width="200%"
            height="380"
            allow="encrypted-media"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
}
