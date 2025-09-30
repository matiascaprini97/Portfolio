import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const portraitImage = PlaceHolderImages.find(p => p.id === 'portrait');

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-center justify-center">
            {portraitImage && (
              <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full shadow-2xl">
                <Image
                  src={portraitImage.imageUrl}
                  alt="Retrato de Matias Caprini"
                  fill
                  className="object-cover"
                  data-ai-hint={portraitImage.imageHint}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Sobre Mí
            </h2>
            <p className="mt-6 text-lg/8 text-muted-foreground">
              Soy Matías Caprini, desarrollador Fullstack Junior especializado en la creación de soluciones completas, desde interfaces modernas con React y el diseño utilitario de TailwindCSS hasta APIs de servidor escalables con Node.js, Express y Python.
            </p>
            <p className="mt-4 text-lg/8 text-muted-foreground">
              Mi experiencia reciente en entornos de Producto Mínimo Viable (MVP), como mi pasantía en Housy, me ha enseñado a priorizar entregables, comunicar ideas complejas de forma sencilla y entregar valor funcional rápidamente. Poseo la autonomía necesaria para implementar soluciones de principio a fin, incluyendo el despliegue y la administración de entornos en la nube de AWS. Busco un rol donde mi versatilidad Fullstack pueda ser aplicada en el desarrollo y escalabilidad de productos innovadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
