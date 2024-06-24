import { Checkbox, Label } from 'flowbite-react'
import Summary from './Summary'
import Seta from '../assets/Seta.png'
import Car from './Car'
// import VictimDetailsModal from './VictimDetailsModal'
import VictimAModal from './VictimAModal'
import VictimBModal from './VictimBModal'
import VictimCModal from './VictimCModal'
import VictimDModal from './VictimDModal'
import VictimEModal from './VictimEModal'
import { useAtom } from 'jotai'
import {
  victimADataAtom,
  victimBDataAtom,
  victimCDataAtom,
  victimDDataAtom,
  victimEDataAtom,
} from './atoms'

const extricationTechniques = [
  'Manipulação de Vidros',
  'Elevação do Painel',
  'Rebatimento do Painel',
  'Retirada de Porta',
  'Elevação do Volante',
  'Retirada do Pedal',
  'Terceira Porta',
  'Grande Porta',
  'Retirada do Teto',
  'Rebatimento do Teto',
  'Tenda',
]

const usedEquipments = [
  'Calços',
  'Blocos',
  'Cunhas',
  'Haste Metálica',
  'Macaco Hidráulico',
  'Almofada Pneumática',
  'Fita Catraca',
  'Estabilizador de Tração',
  'Cabo ou fita',
  'Martelo',
  'Pé-de-cabra',
  'Halligan',
  'Quebra-vidro',
  'Glassmaster',
  'Serra-sabre',
  'Protetor de Airbags',
  'Escudo de Proteção',
  'Motoabrasivo',
  'Lona de Proteção',
  'Corrente',
  'Motobomba',
  'Extensor',
  'Combinada',
  'Cilindro Expansor',
  'Cortador',
  'Cortador de Pedal',
  'Mangueira Hidráulica',
]

function RescuePlan() {
  const [victimA] = useAtom(victimADataAtom)
  const [victimB] = useAtom(victimBDataAtom)
  const [victimC] = useAtom(victimCDataAtom)
  const [victimD] = useAtom(victimDDataAtom)
  const [victimE] = useAtom(victimEDataAtom)

  return (
    <div className="flex flex-col w-11/12 mt-4 border-2 border-black">
      <div className="bg-red-700 text-center text-white uppercase">
        <h4>Plano de Salvamento Veicular</h4>
      </div>

      <div className="border-2 border-black mx-4 my-2">
        <p className="bg-slate-400 uppercase font-bold text-center border-b-2 border-black">
          Número de Vítimas
        </p>

        <div className="ml-4 py-2">
          {Array(5)
            .fill('')
            .map((_, index) => (
              <div
                key={`victim-${index + 1}`}
                className="flex items-center gap-2"
              >
                <Checkbox id={`victim-${index + 1}`} />
                <Label htmlFor={`victim-${index + 1}`} className="flex">
                  {index + 1}
                </Label>
              </div>
            ))}
        </div>
      </div>

      <div className="border-2 border-black mx-4 my-2">
        <p className="bg-slate-400 uppercase font-bold text-center border-b-2 border-black">
          Posição das Vítimas
        </p>

        <div className="flex justify-center p-3">
          <div className="flex flex-col">
            <Car className="[zoom:200%]" />

            <div className="flex flex-col mt-8">
              {victimA.typeOfIncarceration !== 'default' && (
                <p>
                  <strong>Vítima A (Motorista):</strong>{' '}
                  {victimA.typeOfIncarceration === 'Ejetada' ? (
                    <span>{victimA.typeOfIncarceration}</span>
                  ) : (
                    <span>
                      {victimA.typeOfIncarceration}, {victimA.typeOfRemove},{' '}
                      {victimA.extractionAngle}
                    </span>
                  )}
                </p>
              )}

              {victimB.typeOfIncarceration !== 'default' && (
                <p>
                  <strong>Vítima B (Dianteiro-direito):</strong>{' '}
                  {victimB.typeOfIncarceration === 'Ejetada' ? (
                    <span>{victimB.typeOfIncarceration}</span>
                  ) : (
                    <span>
                      {victimB.typeOfIncarceration}, {victimB.typeOfRemove},{' '}
                      {victimB.extractionAngle}
                    </span>
                  )}
                </p>
              )}

              {victimC.typeOfIncarceration !== 'default' && (
                <p>
                  <strong>Vítima C (Traseiro-esquerdo):</strong>{' '}
                  {victimC.typeOfIncarceration === 'Ejetada' ? (
                    <span>{victimC.typeOfIncarceration}</span>
                  ) : (
                    <span>
                      {victimC.typeOfIncarceration}, {victimC.typeOfRemove},{' '}
                      {victimC.extractionAngle}
                    </span>
                  )}
                </p>
              )}

              {victimD.typeOfIncarceration !== 'default' && (
                <p>
                  <strong>Vítima D (Traseiro-meio):</strong>{' '}
                  {victimD.typeOfIncarceration === 'Ejetada' ? (
                    <span>{victimD.typeOfIncarceration}</span>
                  ) : (
                    <span>
                      {victimD.typeOfIncarceration}, {victimD.typeOfRemove},{' '}
                      {victimD.extractionAngle}
                    </span>
                  )}
                </p>
              )}

              {victimE.typeOfIncarceration !== 'default' && (
                <p>
                  <strong>Vítima E (Traseiro-direito):</strong>{' '}
                  {victimE.typeOfIncarceration === 'Ejetada' ? (
                    <span>{victimE.typeOfIncarceration}</span>
                  ) : (
                    <span>
                      {victimE.typeOfIncarceration}, {victimE.typeOfRemove},{' '}
                      {victimE.extractionAngle}
                    </span>
                  )}
                </p>
              )}
            </div>
          </div>

          <VictimAModal />
          <VictimBModal />
          <VictimCModal />
          <VictimDModal />
          <VictimEModal />
        </div>
      </div>

      <div className="border-2 border-black mx-4 my-2">
        <p className="bg-slate-400 uppercase font-bold text-center border-b-2 border-black">
          Técnicas de Desencarceramento
        </p>

        <div className="px-4 py-2 space-y-2">
          {extricationTechniques.map((technique, index) => (
            <div key={index} className="flex items-center gap-2">
              <Checkbox id={`technique-${index}`} />
              <Label htmlFor={`technique-${index}`} className="flex">
                {technique}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-black mx-4 my-2">
        <p className="bg-slate-400 uppercase font-bold text-center border-b-2 border-black">
          Equipamentos Utilizados
        </p>

        <div className="px-4 py-2 space-y-2">
          {usedEquipments.map((equipment, index) => (
            <div key={index} className="flex items-center gap-2">
              <Checkbox id={`equipment-${index}`} />
              <Label htmlFor={`equipment-${index}`} className="flex">
                {equipment}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-black mx-4 my-2">
        <p className="bg-slate-400 uppercase font-bold text-center border-b-2 border-black">
          Plano
        </p>

        <div className="flex items-center flex-col mb-2">
          <Summary title="(B) Emergencial" classNames="mt-2" />
          <img className="w-10 h-24 my-2" src={Seta} />
          <Summary title="(A) Principal" />
        </div>
      </div>
    </div>
  )
}

export default RescuePlan
