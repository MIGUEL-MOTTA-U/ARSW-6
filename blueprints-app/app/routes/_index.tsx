import type { MetaFunction } from "@remix-run/node";
import {HeroUIProvider} from "@heroui/system";
import ResponsiveCanvas from "~/components/ResponsiveCanvas";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    //<div className="flex h-screen items-center justify-center">
    <HeroUIProvider>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <header className="bg-gray-200 p-4">
        <Header />
        </header>

        {/* Body con dos columnas */}
        <main className="flex flex-grow">
          {/* Parte Izquierda */}
          <section className="w-1/2 bg-blue-100 p-4">
            <div className="flex justify-center">

              </div>
            <p>Contenido Izquierdo</p>
          </section>

          {/* Parte Derecha */}
          <section className="w-1/2 bg-blue-200 p-4">
            <p>Contenido Derecho</p>
            <ResponsiveCanvas/>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 p-4">
          <p>Footer</p>
        </footer>
      </div>
    </HeroUIProvider>
//    </div>
  );
}
