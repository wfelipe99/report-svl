import { Checkbox, Label } from 'flowbite-react'

const actions = [
  'Posicionamento Correto da VTR',
  'Sinalização da Via',
  'Solicitação de Apoio Externo',
  'Estabilização do Veículo',
  'Área de Descarte',
  'Palco de Ferramentas',
  'Gerenciamento de Resíduos',
  'Desmobilização',
  'Manutenção dos Equipamentos',
]

function ActionsInScene() {
  return (
    <div className="flex flex-col w-11/12 mt-4 border-2 border-black">
      <div className="bg-red-700 text-center text-white uppercase">
        <h4>Ações na Ocorrência</h4>
      </div>

      <div className="px-4 py-2 space-y-1">
        {actions.map((action, index) => (
          <div key={`action-${index}`} className="flex items-center gap-2">
            <Checkbox id={`action-${index}`} />
            <Label htmlFor={`action-${index}`} className="flex">
              {action}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActionsInScene
