import ActionsInScene from './components/ActionsInScene'
import AssignedCrew from './components/AssignedCrew'
import CollisionType from './components/CollisionType'
import Header from './components/Header'
import Identification from './components/Identification'
import RescuePlan from './components/RescuePlan'
import RisksManagement from './components/RisksManagement'
import Summary from './components/Summary'
import VehicleType from './components/VehicleType'
import { DevTools } from 'jotai-devtools'
import 'jotai-devtools/styles.css'

function App() {
  return (
    <>
      <DevTools />
      <Header />
      <div className="flex flex-col items-center w-scree gap-y-4">
        <Identification />
        <AssignedCrew />
        <Summary title="Resumo / Descrição do Cenário" />
        <ActionsInScene />
        <RisksManagement />
        <CollisionType />
        <VehicleType />
        <RescuePlan />
      </div>
    </>
  )
}

export default App
