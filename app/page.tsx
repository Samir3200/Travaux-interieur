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
        <h2 className="text-4xl font-bold mb-6 text-brown-900 dark:text-cyan-200 text-center drop-shadow">Réalisations par Bilel</h2>
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
                    className="my-8 border-0 h-1 bg-gradient-to-r from-blue-700 via-cyan-700 to-transparent rounded-full shadow-lg"
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
            className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 14.487c-.263-.131-1.558-.77-1.799-.858-.241-.088-.417-.131-.593.132-.175.263-.676.858-.828 1.033-.151.175-.304.197-.567.066-.263-.132-1.11-.409-2.114-1.304-.782-.696-1.31-1.556-1.464-1.819-.151-.263-.016-.405.115-.536.118-.117.263-.304.395-.456.132-.151.175-.263.263-.438.088-.175.044-.329-.022-.462-.066-.132-.593-1.432-.813-1.963-.214-.514-.433-.444-.593-.452l-.504-.009c-.175 0-.462.066-.705.329-.242.263-.926.905-.926 2.205 0 1.3.948 2.557 1.08 2.732.132.175 1.87 2.857 4.522 3.89.633.217 1.127.346 1.513.443.636.162 1.215.139 1.673.084.511-.06 1.558-.637 1.779-1.253.22-.615.22-1.142.154-1.253-.066-.11-.241-.175-.504-.307z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12c0 1.708.438 3.313 1.205 4.704L2.25 21.75l5.13-1.347A9.708 9.708 0 0012 21.75c5.385 0 9.75-4.365 9.75-9.75z" />
            </svg>
            <span>Contactez-moi</span>
          </a>
        </div>
      </section>

      <footer className="w-full text-center text-zinc-500 py-6 text-sm">© {new Date().getFullYear()} Travaux Bilel. Tous droits réservés.</footer>
    </div>
  );
  
}
