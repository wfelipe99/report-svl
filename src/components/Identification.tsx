import {
  Button,
  Datepicker,
  FloatingLabel,
  Label,
  TextInput,
} from 'flowbite-react'
import { ChangeEvent, useState } from 'react'
import { MdAssignmentAdd } from 'react-icons/md'

function Identification() {
  const [inputs, setInputs] = useState([''])

  const handleAddFichaAPH = () => {
    setInputs([...inputs, ''])
  }

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const newInputs = inputs.slice()
    newInputs[index] = (event.target as HTMLInputElement).value
    setInputs(newInputs)
  }

  return (
    <div className="flex flex-col w-11/12">
      <h4 className="text-center">Dados Gerais</h4>
      <div className="flex border-2 border-gray-500 p-4">
        <div className="flex w-full flex-col space-y-4">
          <FloatingLabel
            className="text-black"
            variant="outlined"
            label="N° Aviso Básico"
          />

          <div>
            <Label htmlFor="dataOcorrencia" value="Data da Ocorrência" />
            <Datepicker
              className="mt-2"
              id="dataOcorrencia"
              language="pt-BR"
              showClearButton={false}
              showTodayButton={false}
            />
          </div>

          <div>
            <Label htmlFor="fichasAPH" value="Fichas de APH" />

            <div className="flex flex-col space-y-2 mt-2">
              {inputs.map((input, index) => (
                <TextInput
                  name="fichasAPH"
                  key={index}
                  type="text"
                  value={input}
                  onChange={(event) => handleInputChange(index, event)}
                  placeholder="Exemplo: 6498456"
                />
              ))}
            </div>

            <Button
              className="mt-2"
              color="failure"
              pill
              onClick={handleAddFichaAPH}
            >
              <MdAssignmentAdd className="mr-2 h-5 w-5" />
              Adicionar ficha de APH
            </Button>
          </div>

          <FloatingLabel
            className="text-black"
            variant="outlined"
            label="Comandante"
          />

          <FloatingLabel
            className="text-black"
            variant="outlined"
            label="Viatura"
          />
        </div>
      </div>
    </div>
  )
}

export default Identification
