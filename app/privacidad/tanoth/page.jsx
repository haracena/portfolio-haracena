export default function Tanoth() {
  return (
    <main className="container mx-auto p-8 bg-neutral-900 rounded-lg text-neutral-200">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad Tanoth Extension</h1>
      
      <p className="mb-6">
        Esta extensión de navegador está diseñada para mejorar la experiencia de
        usuario en la web.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">1. Información que recopilamos</h2>
        <p>
          Nuestra extensión no recopila información personal identificable de los usuarios. 
          No almacenamos nombres, direcciones de correo electrónico, números de teléfono 
          ni ninguna otra información que pueda identificar a una persona.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">2. Información que utilizamos</h2>
        <p>
          La extensión utiliza la información del juego Tanoth a la que accede a través 
          de la API del juego y la página web del juego. Esta información se utiliza 
          exclusivamente para automatizar las acciones del usuario dentro del juego, 
          como la recolección de recursos, el combate contra monstruos o la gestión de misiones.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">3. Cómo utilizamos la información</h2>
        <p>
          La información recopilada se utiliza únicamente para proporcionar la funcionalidad 
          principal de la extensión, que es la automatización de aventuras en el juego Tanoth. 
          No utilizamos esta información para ningún otro propósito, como análisis o seguimiento del usuario.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">4. Compartir información</h2>
        <p>
          No compartimos ninguna información con terceros. La información a la que accede 
          la extensión se utiliza exclusivamente dentro de la extensión para proporcionar 
          sus funcionalidades.
        </p>
      </section>

      {/* <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">5. Almacenamiento de datos</h2>
        <p>
          La extensión puede almacenar datos localmente en el navegador del usuario utilizando 
          la API chrome.storage. Estos datos se utilizan para guardar las preferencias del usuario, 
          como la configuración de las acciones a automatizar, los recursos a priorizar o las 
          estrategias de juego personalizadas. Estos datos no se comparten con terceros y se 
          almacenan de forma segura en el navegador del usuario.
        </p>
      </section> */}

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">5. Permisos</h2>
        <p>La extensión requiere los siguientes permisos para funcionar correctamente:</p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>activeTab:</strong> Permite acceder a la pestaña activa del usuario para interactuar con el juego Tanoth.</li>
          <li><strong>scripting:</strong> Permite inyectar código JavaScript en la página del juego Tanoth para automatizar acciones.</li>
          {/* <li><strong>storage:</strong> Permite guardar las preferencias del usuario y otros datos necesarios para el funcionamiento de la extensión.</li> */}
          <li><strong>background:</strong> Permite ejecutar tareas en segundo plano para la automatización continua de aventuras.</li>
          <li><strong>host:</strong> Permite interactuar con los servidores del juego Tanoth.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">6. Cambios en la política de privacidad</h2>
        <p>
          Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. 
          Cualquier cambio será publicado en esta página.
        </p>
      </section>
    </main>
  );
}
