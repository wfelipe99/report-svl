import { FloatingLabel } from 'flowbite-react'
import ABT from '../assets/ABT.png'
import AR from '../assets/AR.png'
import AS from '../assets/AS.png'

function AssignedCrew() {
  return (
    <div className="flex flex-col w-11/12 border-2 border-black">
      <div className="bg-red-700 text-center text-white uppercase">
        <h4>Equipe Empenhada</h4>
      </div>

      <div className="flex flex-col py-4 px-8">
        <div className="flex flex-col border-2 p-4">
          <div className="flex justify-between border-2 p-4">
            <img src={ABT} className="w-24 h-12 mr-4" />

            <FloatingLabel
              sizing="sm"
              variant="outlined"
              label="Viatura"
              helperText="Exemplo: ABT-15"
            />
          </div>

          <div className="flex items-center border-2 p-4 mt-4 justify-between">
            <span className="mb-7">Comandante</span>
            <FloatingLabel
              sizing="sm"
              variant="outlined"
              label="Identificação"
              helperText="Exemplo: Tenente Childerico"
            />
          </div>

          <div className="flex items-center border-2 p-4 mt-4 justify-between">
            <span className="mb-7">Auxiliar</span>

            <FloatingLabel
              sizing="sm"
              variant="outlined"
              label="Identificação"
              helperText="Exemplo: Tenente Childerico"
            />
          </div>

          <div className="flex items-center border-2 p-4 mt-4 justify-between">
            <span className="mb-7">Auxiliar</span>

            <FloatingLabel
              sizing="sm"
              variant="outlined"
              label="Identificação"
              helperText="Exemplo: Tenente Childerico"
            />
          </div>

          <div className="flex items-center border-2 p-4 mt-4 justify-between">
            <span className="mb-7">Condutor</span>

            <FloatingLabel
              sizing="sm"
              variant="outlined"
              label="Identificação"
              helperText="Exemplo: Tenente Childerico"
            />
          </div>
        </div>

        <div className="flex flex-col border-2 p-4 mt-4">
          <div className="flex justify-between border-2 p-4">
            <img src={AR} className="w-24 h-12 mr-4" />

            <FloatingLabel
              sizing="sm"
              variant="outlined"
              label="Viatura"
              helperText="Exemplo: AR-01"
            />
          </div>

          <div className="flex items-center border-2 p-4 mt-4 justify-between">
            <span className="mb-7">Comandante</span>
            <FloatingLabel
              sizing="sm"
              variant="outlined"
              label="Identificação"
              helperText="Exemplo: Tenente Childerico"
            />
          </div>

          <div className="flex items-center border-2 p-4 mt-4 justify-between">
            <span className="mb-7">Auxiliar</span>

            <FloatingLabel
              sizing="sm"
              variant="outlined"
              label="Identificação"
              helperText="Exemplo: Tenente Childerico"
            />
          </div>

          <div className="flex items-center mt-4 border-2 p-4 justify-between">
            <span className="mb-7">Auxiliar</span>

            <FloatingLabel
              sizing="sm"
              variant="outlined"
              label="Identificação"
              helperText="Exemplo: Tenente Childerico"
            />
          </div>

          <div className="flex items-center mt-4 border-2 p-4 justify-between">
            <span className="mb-7">Condutor</span>

            <FloatingLabel
              sizing="sm"
              variant="outlined"
              label="Identificação"
              helperText="Exemplo: Tenente Childerico"
            />
          </div>
        </div>

        <div className="flex flex-col border-2 p-4 mt-4">
          <div className="flex justify-between border-2 p-4">
            <img src={AS} className="w-24 h-12 mr-4" />

            <FloatingLabel
              sizing="sm"
              variant="outlined"
              label="Viatura"
              helperText="Exemplo: AS-01"
            />
          </div>

          <div className="flex items-center border-2 p-4 mt-4 justify-between">
            <span className="mb-7">Comandante</span>
            <FloatingLabel
              sizing="sm"
              variant="outlined"
              label="Identificação"
              helperText="Exemplo: Tenente Childerico"
            />
          </div>

          <div className="flex items-center border-2 p-4 mt-4 justify-between">
            <span className="mb-7">Condutor</span>

            <FloatingLabel
              sizing="sm"
              variant="outlined"
              label="Identificação"
              helperText="Exemplo: Tenente Childerico"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssignedCrew
