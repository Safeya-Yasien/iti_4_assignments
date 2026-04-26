import { createConnection } from 'mongoose';

export async function mongoProvider(connectionUri: string) {
  return new Promise((resolve, reject) => {
    try {
      const connection = createConnection(connectionUri);

      connection.on('connected', () => {
        console.log('MongoDB Connected');
        resolve(connection);
      });

      connection.on('error', (error: Error) => {
        console.log('error', error);
        reject(error);
      });
    } catch (error: unknown) {
      console.log('error', error);
      if (error instanceof Error) reject(error);
      else reject(new Error('unkown error'));
    }
  });
}
