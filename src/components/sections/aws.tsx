import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SlidersHorizontal, Rocket, Activity } from "lucide-react";

const awsSkills = [
  {
    title: "Gestión de Entornos",
    description: "Configuro entornos de servidor Node/Express optimizados para el bajo costo y rendimiento en servicios como AWS EC2/Lightsail.",
    icon: <SlidersHorizontal className="h-6 w-6" />,
  },
  {
    title: "Despliegue y Distribución",
    description: "Despliego aplicaciones completas en AWS, asegurando la disponibilidad 24/7 y la gestión continua del código en producción.",
    icon: <Rocket className="h-6 w-6" />,
  },
  {
    title: "Monitoreo y Escalabilidad",
    description: "Monitorizo el rendimiento de aplicaciones en AWS para identificar cuellos de botella y ajustar la asignación de recursos, pensando en la escalabilidad futura.",
    icon: <Activity className="h-6 w-6" />,
  }
];

export default function Aws() {
  return (
    <section id="aws" className="bg-secondary py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Experiencia en la Nube y Despliegue
            </h2>
            <p className="mt-6 text-lg/8 text-muted-foreground">
              Mi conocimiento de AWS me permite ir más allá de la codificación de las capas. Despliego, administro y monitorizo mis aplicaciones, asegurando que el producto final no solo funcione bien en local, sino que esté listo para ser operado a escala web. Esta capacidad de desarrollo de ciclo completo (full-cycle development) es esencial para la eficiencia operativa en entornos ágiles y con recursos limitados.
            </p>
          </div>
          <div className="space-y-6">
            {awsSkills.map((skill) => (
               <Card key={skill.title} className="bg-card">
                 <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-accent/10 p-3 text-accent">
                    {skill.icon}
                  </div>
                   <CardTitle>{skill.title}</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-muted-foreground">{skill.description}</p>
                 </CardContent>
               </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
