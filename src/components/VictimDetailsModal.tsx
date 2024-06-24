import { Button, Modal, Select } from 'flowbite-react'
import { useAtom } from 'jotai'

function VictimDetailsModal() {
  const [openModal, setOpenModal] = useAtom(victimDetailsModalAtom)

  const onCloseModal = () => setOpenModal({ open: false, position: undefined })

  function handleOnSave() {
    setOpenModal({ open: false, position: undefined })
  }

  return (
    <Modal show={openModal.open} size="md" onClose={onCloseModal}>
      <Modal.Header className="bg-red-700 border-2 border-black">
        <span className="text-white">
          Detalhes da Vítima {openModal.position}
        </span>
      </Modal.Header>
      <Modal.Body>
        <div className="border-2 border-black mx-4 my-2 ">
          <p className="bg-slate-400 uppercase font-bold text-center border-b-2 border-black">
            Tipo de Encarceramento
          </p>

          <Select
            className="p-4"
            defaultValue={typeOfIncarceration}
            onChange={(e) => setTypeOfIncarceration(e.target.value)}
          >
            <option value="default" disabled>
              Selecione o tipo de encarceramento
            </option>
            <option value="Mecânica">Mecânica</option>
            <option value="Físico 1">Físico 1</option>
            <option value="Física 2">Física 2</option>
            <option value="Ejetada">Ejetada</option>
          </Select>
        </div>

        <div className="border-2 border-black mx-4 my-2">
          <p className="bg-slate-400 uppercase font-bold text-center border-b-2 border-black">
            Tipo de Retirada
          </p>

          <Select
            className="p-4"
            defaultValue={typeOfRemove}
            onChange={(e) => setTypeOfRemove(e.target.value)}
          >
            <option value="default" disabled>
              Selecione o tipo de retirada
            </option>
            <option value="Imediata">Imediata</option>
            <option value="Rápida">Rápida</option>
            <option value="Controlada">Controlada</option>
          </Select>
        </div>

        {typeOfIncarceration !== 'Ejetada' ? (
          <div className="border-2 border-black mx-4 my-2">
            <p className="bg-slate-400 uppercase font-bold text-center border-b-2 border-black">
              Ângulo de Extração
            </p>

            <Select
              className="p-4"
              defaultValue={extractionAngle}
              onChange={(e) => setExtractionAngle(e.target.value)}
            >
              <option value="default" disabled>
                Selecione o ângulo de extração
              </option>
              <option value="0°">0°</option>
              <option value="30°">30°</option>
              <option value="60°">60°</option>
              <option value="90°">90°</option>
            </Select>
          </div>
        ) : (
          <></>
        )}

        <div className="flex justify-center mt-4">
          <Button color="failure" onClick={handleOnSave}>
            Salvar
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default VictimDetailsModal
