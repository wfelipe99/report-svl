import { Button, Modal, Select } from 'flowbite-react'
import { useAtom } from 'jotai'
import { victimBDataAtom, victimBModalAtom } from './atoms'

function VictimBModal() {
  const [openModal, setOpenModal] = useAtom(victimBModalAtom)
  const [victimB, setVictimB] = useAtom(victimBDataAtom)

  const onCloseModal = () => setOpenModal(false)

  function handleOnSave() {
    setOpenModal(false)
  }

  return (
    <Modal show={openModal} size="md" onClose={onCloseModal}>
      <Modal.Header className="bg-red-700 border-2 border-black">
        <span className="text-white">
          Detalhes da Vítima B (Dianteiro-direito)
        </span>
      </Modal.Header>
      <Modal.Body>
        <div className="border-2 border-black mx-4 my-2 ">
          <p className="bg-slate-400 uppercase font-bold text-center border-b-2 border-black">
            Tipo de Encarceramento
          </p>

          <Select
            className="p-4"
            defaultValue={victimB.typeOfIncarceration}
            onChange={(e) =>
              setVictimB({ ...victimB, typeOfIncarceration: e.target.value })
            }
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

        {victimB.typeOfIncarceration !== 'Ejetada' ? (
          <>
            <div className="border-2 border-black mx-4 my-2">
              <p className="bg-slate-400 uppercase font-bold text-center border-b-2 border-black">
                Tipo de Retirada
              </p>

              <Select
                className="p-4"
                defaultValue={victimB.typeOfRemove}
                onChange={(e) =>
                  setVictimB({ ...victimB, typeOfRemove: e.target.value })
                }
              >
                <option value="default" disabled>
                  Selecione o tipo de retirada
                </option>
                <option value="Imediata">Imediata</option>
                <option value="Rápida">Rápida</option>
                <option value="Controlada">Controlada</option>
              </Select>
            </div>

            <div className="border-2 border-black mx-4 my-2">
              <p className="bg-slate-400 uppercase font-bold text-center border-b-2 border-black">
                Ângulo de Extração
              </p>

              <Select
                className="p-4"
                defaultValue={victimB.extractionAngle}
                onChange={(e) =>
                  setVictimB({ ...victimB, extractionAngle: e.target.value })
                }
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
          </>
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

export default VictimBModal
