import { Checkbox, FloatingLabel, Label } from 'flowbite-react'

const risks = [
  'Colapso Estrutural',
  'Energia Elétrica',
  'Produtos Perigosos',
  'Incêndio',
  'Explosão',
]

const fuelLeak = ['GNV', 'Óleo diesel', 'Gasolina', 'Outro']

const securitySystems = ['Air-bags', 'Bateria 12V', 'Bateria de Alta Tensão']

function RisksManagement() {
  return (
    <div className="flex flex-col w-11/12 mt-4 border-2 border-black">
      <div className="bg-red-700 text-center text-white uppercase">
        <h4>Gerenciamento de Riscos</h4>
      </div>

      <div className="px-4 py-2 space-y-2">
        {risks.map((risk, index) => (
          <div key={index} className="flex items-center gap-2">
            <Checkbox id={`risk-${index}`} />
            <Label htmlFor={`risk-${index}`} className="flex">
              {risk}
            </Label>
          </div>
        ))}

        <div className="border-2 p-2">
          <div className="flex items-center gap-2">
            <Checkbox id="VazamentoCombustivel" />
            <Label htmlFor="VazamentoCombustivel" className="flex">
              Vazamento de Combustível
            </Label>
          </div>

          {fuelLeak.map((fuel, index) => (
            <div key={`fuel-${index}`} className="flex items-center gap-2 ml-5">
              <Checkbox id={`fuel-${index}`} />
              <Label htmlFor={`fuel-${index}`} className="flex">
                {fuel}
              </Label>
            </div>
          ))}
        </div>

        <div className="border-2 p-2">
          <div className="flex items-center gap-2">
            <Checkbox id="SistemasSeguranca" />
            <Label htmlFor="SistemasSeguranca" className="flex">
              Sistemas de Segurança
            </Label>
          </div>

          {securitySystems.map((system, index) => (
            <div
              key={`security-${index}`}
              className="flex items-center gap-2 ml-5"
            >
              <Checkbox id={`security-${index}`} />
              <Label htmlFor={`security-${index}`} className="flex">
                {system}
              </Label>
            </div>
          ))}
        </div>

        <FloatingLabel
          variant="outlined"
          label="Outros riscos"
          helperText="Digite outros riscos gerenciados não listados, separe por vígula em caso de mais de 1 item."
        />
      </div>
    </div>
  )
}

export default RisksManagement
