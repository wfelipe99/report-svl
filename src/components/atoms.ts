import { atom } from 'jotai'

type VictimDetails = {
  position: string | undefined
  typeOfIncarceration: string
  typeOfRemove: string
  extractionAngle: string
}

// export const victimDetailsModalAtom = atom({ open: false, position: undefined })
// export const victimDetailsDataAtom = atom<VictimDetails[]>([])

export const victimAModalAtom = atom(false)
export const victimADataAtom = atom({
  typeOfIncarceration: 'default',
  typeOfRemove: 'default',
  extractionAngle: 'default',
})

export const victimBModalAtom = atom(false)
export const victimBDataAtom = atom({
  typeOfIncarceration: 'default',
  typeOfRemove: 'default',
  extractionAngle: 'default',
})

export const victimCModalAtom = atom(false)
export const victimCDataAtom = atom({
  typeOfIncarceration: 'default',
  typeOfRemove: 'default',
  extractionAngle: 'default',
})

export const victimDModalAtom = atom(false)
export const victimDDataAtom = atom({
  typeOfIncarceration: 'default',
  typeOfRemove: 'default',
  extractionAngle: 'default',
})

export const victimEModalAtom = atom(false)
export const victimEDataAtom = atom({
  typeOfIncarceration: 'default',
  typeOfRemove: 'default',
  extractionAngle: 'default',
})
