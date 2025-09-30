import ContactForm from '@/components/contact-form';

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Conversemos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ¿Listo para llevar su proyecto al siguiente nivel? Contáctame para discutir cómo mis habilidades Fullstack pueden aportar valor inmediato a tu equipo.
            </p>
            <p className="mt-2 text-lg text-muted-foreground">
              Estoy abierto a nuevas oportunidades y colaboraciones.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
