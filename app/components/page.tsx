import type { Metadata } from "next"

/* export const metadata: Metadata = {
  title: "Components | Minimal Docs Site",
  description: "Explore the components available in our library",
} */

// pages/installation.js

// pages/installation.js

export default function Installation() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Instalação</h1>
      <p className="text-xl mb-4">
        Para poder utilizar a plataforma Nhabex, a agência deverá estar registada em um dos
        planos disponíveis. Após esse registo, o acesso à aplicação web é feito através do
        seguinte endereço:
        <a href="https://nhabex.com/commercial/login" className="text-blue-500">
          https://nhabex.com/commercial/login
        </a>
      </p>
      <div className="mt-6">
        <img
          src="/installation/login.png"
          alt="Exemplo de imagem"
          className="w-full h-auto"
        />
      </div>
      {/* <h2 className="text-2xl font-semibold mt-8 mb-4">Button</h2> */}
      <p className="mb-4 mt-6">
        Para acesso é necessário introduzir as credenciais de acesso criadas durante o registo.
      </p>
      {/* <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`import { Button } from '@our-company/package';

<Button variant="primary" onClick={() => console.log('Clicked!')}>
  Click me
</Button>`}</code>
      </pre> */}
      {/* <h2 className="text-2xl font-semibold mt-8 mb-4">Card</h2>
      <p className="mb-4">The Card component is used to display content in a box with a consistent style.</p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`import { Card, CardHeader, CardContent } from '@our-company/package';

<Card>
  <CardHeader>Card Title</CardHeader>
  <CardContent>This is the card content.</CardContent>
</Card>`}</code>
      </pre>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Input</h2>
      <p className="mb-4">The Input component is a styled input field for collecting user data.</p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`import { Input } from '@our-company/package';

<Input placeholder="Enter your name" onChange={(e) => console.log(e.target.value)} />`}</code>
      </pre>
      <p className="mt-4">
        For a complete list of components and their props, please refer to our API Reference section.
      </p> */}
    </div>
  )
}

