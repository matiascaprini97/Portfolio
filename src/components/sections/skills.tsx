import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Server, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend/UX',
    icon: <Code className="h-6 w-6" />,
    skills: ['React', 'TailwindCSS', 'HTML', 'CSS', 'JavaScript'],
    description: 'Creación de interfaces rápidas, responsivas y accesibles, con enfoque en la estética y la experiencia de usuario (UI/UX).',
  },
  {
    title: 'Backend/API',
    icon: <Server className="h-6 w-6" />,
    skills: ['Node.js', 'Express', 'Python'],
    description: 'Desarrollo de APIs RESTful robustas y escalables. Uso de Node para alta concurrencia y Python para scripts o lógica compleja.',
  },
  {
    title: 'Base de Datos',
    icon: <Database className="h-6 w-6" />,
    skills: ['SQL'],
    description: 'Diseño y gestión de esquemas de bases de datos relacionales para garantizar la integridad y el rendimiento de la información.',
  },
  {
    title: 'Infraestructura/DevOps',
    icon: <Cloud className="h-6 w-6" />,
    skills: ['AWS'],
    description: 'Capacidad para configurar, desplegar y operar soluciones completas en entornos de nube, asegurando la puesta en producción.',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-secondary py-24 sm:py-32">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Mi Stack Tecnológico
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Un ecosistema de herramientas para construir soluciones completas y eficientes.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <Card key={category.title} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  {category.icon}
                </div>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground flex-grow">{category.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
