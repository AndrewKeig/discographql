import { dynamoDb } from '../services/dynamoDb'
import { AppSyncResolverEvent } from 'aws-lambda'
import { Recording, RecordingGetRequest } from '../interfaces/recording'

export const handler = async (event: AppSyncResolverEvent<RecordingGetRequest>): Promise<Recording | null | Error> => {
  try {
    const recordingId = event.arguments.input.recordingId

    const params = {
      TableName: process.env.DISCOGRAPHQL_TABLE_NAME as string,
      Key: {
        PK: 'RECORDING',
        SK: `RECORDING#${recordingId}`,
      },
    }

    const { Item } = await dynamoDb.get(params).promise()

    if (!Item) {
      return null
    }

    return { ...Item.data, id: Item.id } as Recording
  } catch (err) {
    return new Error('Unable to get recording')
  }
}
