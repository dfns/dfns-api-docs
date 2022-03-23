import { v4 as uuidv4 } from 'uuid'
import Humanhash from 'humanhash'

const hh = new Humanhash()

const entityIdPrefixByTypeName: { [key: string]: string } = {
  AssetAccount: 'aa',
  Payment: 'pa',
  Policy: 'pol',
  PolicyControl: 'poc',
  PolicyRule: 'por',
}

const createIsoDatetime = (name: string, typeName: string) =>
  new Date().toISOString()

const createIsoDate = (name: string, typeName: string) =>
  new Date().toISOString().split('T').shift() as string

const createEntityId = (name: string, typeName: string) => {
  const id = uuidv4()
  const prefix = entityIdPrefixByTypeName[typeName] || 'noprefix'
  const shortUuid = id.split('-').join('').substring(0, 12)
  const humanized = hh.humanize(id).split('---').join('-').split('--').join('-')
  return `${prefix}-${humanized}-${shortUuid}`
}
const createVersion = () => {
  const now = new Date()
  const startOfDfns = new Date('2021-01-01')
  const msSince2021 = now.valueOf() - startOfDfns.valueOf()
  const secondsSince2021 = Math.floor(msSince2021 / 1000)

  return secondsSince2021.toString(32)
}

const scalarFactories: { [key: string]: Function } = {
  IsoDatetime: createIsoDatetime,
  IsoDate: createIsoDate,
  EntityId: createEntityId,
}

const generatorFactories: { [key: string]: Function } = {
  Verion: createIsoDatetime,
}

export const createByType = (
  factoryName: string,
  name: string,
  typeName: string
): any => {
  const factory: any = scalarFactories[factoryName] as any

  if (typeof factory === 'function') {
    return factory(name, typeName)
  } else {
    throw new Error(
      `createByType: unable to generate item for factory: ${factoryName}, name: ${name}, typeName: ${typeName}`
    )
  }
}

export const createByGenerator = (
  generatorName: string,
  name: string,
  typeName: string
): any => {
  const factory: any = generatorFactories[generatorName] as any

  if (typeof factory === 'function') {
    return factory(name, typeName)
  } else {
    throw new Error(
      `createByGenerator: unable to generate item for generatorName: ${generatorName}, name: ${name}, typeName: ${typeName}`
    )
  }
}

export const compositeValues = (...values: any) => values.join('_')
