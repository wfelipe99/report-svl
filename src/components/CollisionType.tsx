import { Checkbox, Label } from 'flowbite-react'

const types = [
  'Frontal',
  'Lateral',
  'Traseira',
  'Rotacional',
  'Capotamento',
  'Tombamento',
]

function CollisionType() {
  return (
    <div className="flex flex-col w-11/12 mt-4 border-2 border-black">
      <div className="bg-red-700 text-center text-white uppercase">
        <h4>Tipo de Colisão</h4>
      </div>

      <div className="px-4 py-2 space-y-1">
        {types.map((type, index) => (
          <div key={index} className="flex items-center gap-2">
            <Checkbox id={`collision-${index}`} />
            <Label htmlFor={`collision-${index}`} className="flex">
              {type}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CollisionType
