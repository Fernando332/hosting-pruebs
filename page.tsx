import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a HostPro</h1>
        <p className="text-xl mb-8">Tu solución de hosting confiable y rápida para todos tus proyectos web</p>
        <Link href="/productos">
          <Button size="lg">Ver Planes</Button>
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8 py-12">
        <div className="text-center">
          <Image src="/placeholder.svg" alt="Hosting Rápido" width={100} height={100} className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Hosting Rápido</h3>
          <p>Servidores optimizados para un rendimiento excepcional.</p>
        </div>
        <div className="text-center">
          <Image src="/placeholder.svg" alt="Soporte 24/7" width={100} height={100} className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Soporte 24/7</h3>
          <p>Estamos aquí para ayudarte en cualquier momento.</p>
        </div>
        <div className="text-center">
          <Image src="/placeholder.svg" alt="99.9% Uptime" width={100} height={100} className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">99.9% Uptime</h3>
          <p>Garantizamos la disponibilidad de tu sitio web.</p>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-800 py-12 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">¿Por qué elegir HostPro?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Tecnología de Vanguardia</h3>
            <p>
              Utilizamos las últimas tecnologías para garantizar el mejor rendimiento y seguridad para tu sitio web.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Escalabilidad</h3>
            <p>Nuestros planes crecen contigo. Escala tus recursos según tus necesidades sin complicaciones.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Seguridad Avanzada</h3>
            <p>Protegemos tu sitio con firewalls, SSL gratuito y copias de seguridad diarias.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Panel de Control Intuitivo</h3>
            <p>Gestiona tu hosting fácilmente con nuestro panel de control amigable y potente.</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Clientes Dicen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="mb-4">
              "HostPro ha sido fundamental para el crecimiento de mi negocio en línea. Su servicio al cliente es
              excepcional."
            </p>
            <p className="font-semibold">- María G., Emprendedora</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="mb-4">
              "Nunca he experimentado un tiempo de inactividad desde que me cambié a HostPro. ¡Altamente recomendado!"
            </p>
            <p className="font-semibold">- Carlos R., Desarrollador Web</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="mb-4">
              "La velocidad de carga de mi sitio mejoró significativamente después de migrar a HostPro. Estoy
              impresionado."
            </p>
            <p className="font-semibold">- Ana L., Bloguera</p>
          </div>
        </div>
      </section>
    </div>
  )
}

