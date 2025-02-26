import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">HostPro</h3>
            <p>Tu solución de hosting confiable y rápida para todos tus proyectos web.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productos" className="hover:underline">
                  Planes de Hosting
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:underline">
                  Dominios
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:underline">
                  SSL
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/soporte" className="hover:underline">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link href="/soporte" className="hover:underline">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/soporte" className="hover:underline">
                  Estado del Sistema
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Compañía</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Carreras
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 HostPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

