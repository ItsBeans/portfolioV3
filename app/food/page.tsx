import Header from "../Header";
import { DockDemo } from '../Footer2';
import Image from 'next/image';

const foodImages = [
    {src: "/food1.jpg", caption: "Duck Ramen, South Korea"},
    {src: "/food2.jpg", caption: "Garlic Pasta, South Korea"},
    {src: "/food3.jpg", caption: "Tteokbokki, South Korea"},
    {src: "/food4.jpg", caption: "Mango bingsu, South Korea"},
    {src: "/food5.jpg", caption: "Pork bbq, South Korea"},
    {src: "/food6.jpg", caption: "Ramen, London UK"},
    {src: "/food7.jpg", caption: "Cheeseburger, London UK"},
    {src: "/food8.jpg", caption: "Pork belly bbq, South Korea"},
];
  
export default function Food() {
    return (
        <>
        <Header/>
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-6xl font-bold text-black dark:text-white italic mb-12">
                favourite foods <span role="img" aria-label="food">🍕</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                a gallery of some of my favourite foods i've eaten so far.
            </p>

            {/* Gallery Grid with Lazy Loading */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {foodImages.map((food, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow group dark:shadow-gray-800">
                        <div className="aspect-square relative">
                            <Image
                                src={food.src}
                                alt={food.caption}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                                loading={index < 4 ? "eager" : "lazy"} 
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                        
                        {/* Caption Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-center text-sm px-4">{food.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <DockDemo/>
        </>
    );
}