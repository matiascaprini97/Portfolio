import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: "housy",
    title: "Housy-Frontend (MVP Freelance)",
    image: PlaceHolderImages.find(p => p.id === 'projectHousy'),
    context: "Colaboré en el desarrollo del Frontend de Housy (housy-frontend), una Plataforma MVP Freelance diseñada para validar un nuevo modelo de negocio. El objetivo principal era Planificar y Construir una Interfaz de Usuario (UI) rápida, modular y responsiva utilizando React y TailwindCSS, lo que requería una integración ágil con un mockup de Backend.",
    action: "Mediante React, codifiqué los componentes modulares clave de la UI, incluyendo la arquitectura de navegación, el sistema de filtrado dinámico y la presentación de tarjetas de proyecto. Integré la librería TailwindCSS para asegurar un flujo de diseño eficiente y una estética limpia. Además, optimicé la estructura de archivos para facilitar el desarrollo en equipo y la escalabilidad del proyecto.",
    result: "Mi contribución resultó en la entrega exitosa del Módulo Frontend MVP, listo para recibir datos reales y para iniciar las primeras pruebas de usuario y la validación comercial. Esta experiencia validó mi capacidad para trabajar en un entorno ágil con un producto en desarrollo activo.",
    githubUrl: "https://github.com/housy-project/housy-frontend",
    liveUrl: null,
  },
  {
    id: "videogames",
    title: "PI-Videogames (Proyecto Fullstack Individual)",
    image: PlaceHolderImages.find(p => p.id === 'projectVideogames'),
    context: "Proyecto individual de desarrollo Fullstack para la gestión, consulta y visualización de un catálogo de videojuegos. El desafío técnico principal fue diseñar y programar una API RESTful escalable utilizando Node.js/Express y una base de datos relacional (SQL) que pudiera manejar la integración y persistencia de grandes volúmenes de datos.",
    action: "En la capa de servidor, implementé Node.js y Express, programando múltiples endpoints robustos para operaciones CRUD. Administré la conexión SQL, diseñando los esquemas de bases de datos para optimizar las consultas. En el Frontend (React), desarrollé una interfaz dinámica que permite a los usuarios aplicar filtros y realizar búsquedas complejas en tiempo real.",
    result: "El proyecto demuestra un control completo sobre el ciclo de desarrollo Fullstack. El backend está configurado para gestionar la persistencia de datos complejos y consultas rápidas, validando la capacidad para desarrollar aplicaciones complejas con alto rendimiento.",
    githubUrl: "https://github.com/matiascaprini97/PI-videogames-matiascaprini",
    liveUrl: null,
  },
  {
    id: "innovatech",
    title: "Innovatech-Backend (Colaboración en Servidor)",
    image: PlaceHolderImages.find(p => p.id === 'projectInnovatech'),
    context: "Colaboración central en el desarrollo del Backend de Innovatech. Mi rol se centró exclusivamente en la planificación y codificación de la lógica de negocio, haciendo hincapié en la estabilidad, la seguridad y la correcta estructuración de la API para el consumo del Frontend.",
    action: "Utilizando Node.js/Express, desarrollé y codifiqué módulos críticos, incluyendo la gestión de rutas y la implementación de middlewares para la autenticación y autorización de usuarios. Solucioné problemas de latencia al reestructurar las llamadas a la base de datos y documenté exhaustivamente la API para facilitar una integración fluida con el equipo de Frontend.",
    result: "Gracias a la arquitectura limpia y modular implementada, el backend ofrece una API estable y lista para producción. Esta experiencia reforzó mi capacidad para coordinar el desarrollo de la capa de servidor y manejar los desafíos de la lógica de negocio compleja bajo metodologías colaborativas.",
    githubUrl: "https://github.com/Vrmoya/innovatech-back",
    liveUrl: null,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proyectos Destacados
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Una selección de mis trabajos que demuestran mi experiencia y habilidades.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden">
              {project.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image.imageUrl}
                    alt={`Imagen del proyecto ${project.title}`}
                    fill
                    className="object-cover"
                    data-ai-hint={project.image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Contexto</AccordionTrigger>
                    <AccordionContent>{project.context}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Acción</AccordionTrigger>
                    <AccordionContent>{project.action}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Resultado</AccordionTrigger>
                    <AccordionContent>{project.result}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button variant="default" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
