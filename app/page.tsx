import React from "react";
import Image from "next/image";


const categories = [
  {
    title: "Carrelage",
    images: [
      { src: "/carrelage après1.jpeg", alt: "Carrelage après" },
      { src: "/carrelage après2.jpeg", alt: "Carrelage après" },
      { src: "/carrelage3.jpeg", alt: "Carrelage" },
      { src: "/carrelage4.jpeg", alt: "Carrelage" },
      { src: "/carrelage5.jpeg", alt: "Carrelage" },
      { src: "/carrelage6.jpeg", alt: "Carrelage" },
    ],
  },
  {
    title: "Peinture",
    images: [
      { src: "/Peinture1.jpeg", alt: "Peinture murale" },
      { src: "/Peinture3.jpeg", alt: "Peinture murale" },
      { src: "/Peinture4.jpeg", alt: "Peinture murale" },
      { src: "/Peinture5.jpeg", alt: "Peinture murale" },
      { src: "/peinture6.jpeg", alt: "Peinture murale" },
      { src: "/peinture7.jpeg", alt: "Peinture murale" },
      { src: "/Peintureplaco2.jpeg", alt: "Peinture placo" },
      { src: "/peintureplaco3.jpeg", alt: "Peinture placo" },
    ],
  },
  {
    title: "Parquet",
    images: [
      { src: "/parquet1.jpeg", alt: "Pose de parquet" },
      { src: "/parquet2.jpeg", alt: "Pose de parquet" },
      { src: "/parquet3.jpeg", alt: "Pose de parquet" },
      { src: "/parquet4.jpeg", alt: "Pose de parquet" },
    ],
  },
  {
    title: "Montage de meubles",
    images: [
      { src: "/montage meuble1.jpeg", alt: "Montage de meuble" },
      { src: "/Montage meuble2.jpeg", alt: "Montage de meuble" },
      { src: "/Montage meuble3.jpeg", alt: "Montage de meuble" },
      { src: "/Montage meuble4.jpeg", alt: "Montage de meuble" },
    ],
  },
  {
    title: "Montage support TV",
    images: [
      { src: "/montage support tv1.jpeg", alt: "Montage support TV" },
      { src: "/montage support tv2.jpeg", alt: "Montage support TV" },
      { src: "/montage support tv3.jpeg", alt: "Montage support TV" },
      { src: "/montage support tv4.jpeg", alt: "Montage support TV" },
      { src: "/montage support tv5.jpeg", alt: "Montage support TV" },
    ],
  },
  {
    title: "Lustres & luminaires",
    images: [
      { src: "/lustre1.jpeg", alt: "Installation de lustre" },
      { src: "/lustre2.jpeg", alt: "Installation de lustre" },
      { src: "/lustre3.jpeg", alt: "Installation de lustre" },
      { src: "/lustre4.jpeg", alt: "Installation de lustre" },
      { src: "/lustre5.jpeg", alt: "Installation de lustre" },
    ],
  },
  {
    title: "Placo & cloisons",
    images: [
      { src: "/Placo1.jpeg", alt: "Travaux de placo" },
      { src: "/Placo2.jpeg", alt: "Travaux de placo" },
      { src: "/placo3.jpeg", alt: "Travaux de placo" },
      { src: "/Placo4.jpeg", alt: "Travaux de placo" },
      { src: "/Placo5.jpeg", alt: "Travaux de placo" },
      { src: "/Placo6.jpeg", alt: "Travaux de placo" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans flex flex-col items-center">
      {/* En-tête */}
      <header className="w-full bg-gradient-to-r from-blue-700/90 to-cyan-500/90 py-10 mb-8 shadow-lg backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-2 text-center drop-shadow-lg">Travaux d'intérieur & Rénovation</h1>
          <p className="text-lg md:text-xl text-blue-900 dark:text-zinc-100 text-center max-w-2xl font-medium drop-shadow">Carrelage, peinture, parquet, montage de meubles, électricité, placo, et plus encore. Donnez vie à vos projets avec un artisan passionné et expérimenté !</p>
        </div>
      </header>

      {/* Présentation */}
      <section className="max-w-3xl w-full px-4 mb-12">
        <div className="bg-white/60 dark:bg-zinc-900/60 rounded-2xl shadow-lg p-8 flex flex-col items-center backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-cyan-200">À propos</h2>
          <p className="text-base md:text-lg text-zinc-900 dark:text-zinc-100 text-center mb-2 font-medium">
            Artisan spécialisé dans les travaux d'intérieur, je vous accompagne dans tous vos projets de rénovation et d'aménagement :
          </p>
          <ul className="list-disc text-zinc-900 dark:text-zinc-100 pl-6 text-left mb-2 font-semibold">
            <li>Pose de carrelage et faïence</li>
            <li>Peinture et décoration</li>
            <li>Montage de meubles et cuisines</li>
            <li>Pose de parquet</li>
            <li>Travaux de placo et cloisons</li>
            <li>Électricité et petits dépannages</li>
          </ul>
          <p className="text-zinc-900 dark:text-zinc-100 text-center font-medium">Qualité, sérieux et conseils personnalisés pour un résultat à la hauteur de vos attentes.</p>
        </div>
      </section>


      {/* Galerie d'images par catégories */}
      <section className="max-w-5xl w-full px-4 mb-16">
        <h2 className="text-4xl font-bold mb-6 text-brown-900 dark:text-cyan-200 text-center drop-shadow">Réalisations par BILEL</h2>
        <div className="flex flex-col gap-12">
          {categories.map((cat, i) => (
            <React.Fragment key={cat.title}>
              <div>
                <h3 className="text-2xl font-extrabold mb-4 text-black dark:text-white drop-shadow-lg">{cat.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cat.images.map((img, idx) => (
                    <div key={idx} className="overflow-hidden rounded-xl shadow-md bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={300}
                        height={200}
                        className="object-cover w-full h-40 hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
             
                {i !== categories.length - 1 && (
                  <hr
                    className="my-8 border-0 h-1 bg-gradient-to-r from-green-700 via-blue-700 to-transparent rounded-full shadow-lg"
                    style={{ opacity: 0.95 }}
                  />
                )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl w-full px-4 mb-12">
        <div className="bg-white/60 dark:bg-zinc-900/60 rounded-2xl shadow-lg p-8 flex flex-col items-center backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-cyan-200">Contact</h2>
          <p className="text-zinc-900 dark:text-zinc-100 text-center mb-4 font-medium">Pour toute demande de devis ou d'information, contactez-moi :</p>
          <a
            href="https://wa.me/33651753772"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn-contact"
          >
            <span className="whatsapp-icon-contact">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#fff"/>
                <path d="M16 6C10.477 6 6 10.477 6 16c0 2.021.607 3.899 1.655 5.47L6 26l4.66-1.613A9.94 9.94 0 0 0 16 26c5.523 0 10-4.477 10-10S21.523 6 16 6zm0 17.5c-1.7 0-3.29-.5-4.63-1.36l-.33-.21-2.76.96.94-2.69-.22-.34A7.47 7.47 0 0 1 8.5 16c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5zm4.13-5.62c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.58.75-.71.9-.13.15-.26.17-.49.06-.23-.12-.97-.36-1.85-1.13-.68-.6-1.14-1.34-1.28-1.57-.13-.23-.01-.36.1-.48.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.4-.06-.12-.51-1.23-.7-1.68-.18-.44-.37-.38-.51-.39-.13-.01-.28-.01-.43-.01-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9 0 1.12.82 2.2.94 2.36.12.15 1.61 2.46 3.91 3.35.55.19.98.3 1.31.38.55.14 1.05.12 1.44.07.44-.07 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.16-.44-.28z" fill="#25D366"/>
              </svg>
            </span>
            <span className="whatsapp-text-contact">Contactez-moi</span>
          </a>
        </div>
      </section>

      <footer className="w-full text-center text-zinc-500 py-6 text-sm">© {new Date().getFullYear()} Travaux Bilel. Tous droits réservés.</footer>
    </div>
  );
  
}
