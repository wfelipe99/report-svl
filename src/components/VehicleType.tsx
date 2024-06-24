import { Checkbox, Label } from 'flowbite-react'

const types = [
  'Hatch',
  'Sedan',
  'Utilitário',
  'Camionete',
  'Caminhoneta',
  'SUV',
  'Conversível',
  'Blindado',
  'Híbrido',
  'Elétrico',
]

function VehicleType() {
  return (
    <div className="flex flex-col w-11/12 mt-4 border-2 border-black">
      <div className="bg-red-700 text-center text-white uppercase">
        <h4>Tipo do Veículo</h4>
      </div>

      <div className="px-4 py-2 space-y-1">
        {types.map((type, index) => (
          <div key={`vehicle-${index}`} className="flex items-center gap-2">
            <Checkbox id={`vehicle-${index}`} />
            <Label htmlFor={`vehicle-${index}`} className="flex">
              {type}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VehicleType
