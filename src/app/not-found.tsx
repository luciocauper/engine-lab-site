export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      {/* Título */}
      <h1 className="text-9xl font-extrabold text-emerald-600">
        404
      </h1>

      {/* Subtítulo */}
      <h2 className="text-2xl md:text-4xl font-bold mt-4">
        Oops! Página não encontrada
      </h2>

      {/* Mensagem */}
      <p className="mt-2 text-gray-600 text-lg max-w-md">
        A página que você está procurando não existe ou foi movida para outro
        lugar.
      </p>

      {/* Botão Voltar */}
      <a
        href="/"
        className="mt-6 px-6 py-3 border-2 border-emerald-600 bg-transparent text-black text-lg rounded-lg shadow-md hover:bg-emerald-700 hover:text-white transition"
      >
        Voltar para a Home
      </a>
    </div>
  );
}
