import AWS from "aws-sdk";

export const dynamoDb = process.env.IS_OFFLINE
  ? new AWS.DynamoDB.DocumentClient({ endpoint: "http://localhost:8000" })
  : new AWS.DynamoDB.DocumentClient();
