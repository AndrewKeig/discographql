import { dynamoDb } from "../services/dynamoDb";
import { v4 as uuidv4 } from "uuid";
import { AppSyncResolverEvent } from "aws-lambda";
import { RecordingCreateRequest, Response } from "../interfaces/recording";

export const handler = async (
  event: AppSyncResolverEvent<RecordingCreateRequest>
): Promise<Response | null | Error> => {
  try {
    const id = uuidv4();

    const params = {
      TableName: process.env.DISCOGRAPHQL_TABLE_NAME as string,
      Item: {
        PK: "RECORDING",
        SK: `RECORDING#${id}`,
        id: id,
        data: {
          ...event.arguments.input,
        },
      },
    };

    await dynamoDb.put(params).promise();
    return { message: `Created recording ${id}` };
  } catch (err) {
    return new Error("Unable to save recording");
  }
};
