import logo from '../assets/logo.png'

function Header() {
  return (
    <header className="flex justify-center items-center py-2 w-screen">
      <img
        src={logo}
        className="w-28 h-24"
        title="Brasão do Corpo de Bombeiros Militar de Alagoas"
        alt="Brasão do Corpo de Bombeiros Militar de Alagoas"
      />
      <div className="flex flex-col font-bold text-center uppercase text-sm">
        <h1>Estado de Alagoas</h1>
        <h2>Secretaria de Segurança Pública</h2>
        <h2>Corpo de Bombeiros Militar de Alagoas</h2>
        <h3 className="mt-4">Relatório de Salvamento Veicular Leve</h3>
      </div>
    </header>
  )
}

export default Header
