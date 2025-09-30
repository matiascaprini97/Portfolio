import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-3.5rem)] min-h-[600px] w-full">
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Matias Caprini: Desarrollador Fullstack
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
          Construyendo MVPs robustos y listos para AWS, desde el pixel hasta la base de datos.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#contact">Conversemos sobre su próximo proyecto</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#projects">
              <ArrowDown className="mr-2 h-4 w-4" />
              Ver mis trabajos
            </Link>
          </Button>
        </div>
      </div>
       <div className="absolute inset-0 bg-grid-slate-200/[0.04] bg-[25px_25px] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]"></div>
    </section>
  );
}
