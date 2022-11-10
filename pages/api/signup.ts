import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
  name: string;
  email: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST request are allowed" });
  }

  const body = req.body as SheetForm;

  try {
    //Prepare Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCUTKXEOAheWP8P\n684SMEDDA56/H1FOn1yy0bFdVsjF/R6FryRnow2RyFSSy6EfT0ry+qTcBMHQrpjN\nwqJRekgR+3f8IXT+m9FjKUdSXflnj/Lv9G25nr0X4ryI3b0+0I3Zv36ZlHjuZLRb\n9++0viGwPj5CpzIorus6NnUw5gZD5aID6NTTvXAS9pSqtH8qfmLehApF0EoKFdke\nMkrV33ege9NJMg6mVjuCSB7RDyFzUIpqg9FxTmYvNcTfKobRTbVZs2Q2gYIDJvcn\nTzU9oZVPhM33EsoVxZYuq6G7kho2EcQvr85lbYUWlWMLq8AHaTtzdjHKMtM9wdGQ\nBvqvYPdhAgMBAAECgf8NXcYyjxUUom6/iQFf3Q5/iWj57lBKeC/9/tNs24Dckj1J\nTTZyY/7OzumJK9FTlhc+J1TzjEwNUsRE0/yru9nDFOUmn/7tm7j6MMBcYrc7qNTe\nOOieRb8deucrK7PQBD9CrqWW0Y4lkijQ+3kn144YlYv+pBuXzhMNYJgFejgnIRqT\n10KTfYALwVFCHdjrc7vBbQ4I32hYn99SYDqz6i96fhwxBbSBU/jKndlZq4mtJise\nV7prncIjpcTNv3pTKPz8Cjipl/YRIuoELuUIkpT63KAJbSxAVR+TF75IR8eOoC+D\nSKTSOV79d62fvAjghfS3UaH/O7M14vfKluS2eiECgYEAyo+Ye3wWdB90Dte6Jd/p\np0d8OfoBqOLxEI3tgS3lQlvOv+uhR/8qHf9sRGqDNZqvrnL5cXrPvWxgvppuTwfN\nZbWcoZffNaOfP/YdLiR/1S/AIisXmRRSR1Bbw4JhtdVtKZsYWFySGYJkJjz17p6H\nfq+XGuZ7CmMzAPhEJbuOw4kCgYEAu2xhEMhe7i6EZx52xGGKfCxoCqmNs4zS4EI3\nCM5NS4z/2Xwbm8mir1QiUea+dA1kd99RU8SoJW0eQKXyqQUVWK0kwTFItooZbpA9\np8CN9o+dCX/taA3CRZ9wQ182b3TKvlRFsc0HHy0JidIK/3YnKPeRvOZLvhxY/6LD\n37H2JxkCgYEAsa+vEbtzMuAYfaCtcOXvX8bsaSsu44hX8K6fhe7Nqh1AysgWzUI/\nHttdjNJmUNJlg8Dloa8apk54uxpa40az3aGnSXUg3zutyXzKchygalEd2Js2cxkJ\nZ/dM1776mXgj7xhXDcP+gRQJaCWXkn9L2kyLX5SIoD8Oka42kWbqwAkCgYEArBj+\noDx8/tRz+4Q7pmOymAbmmjPKy/4ZfJcQleNpkmAsZnXRnCFwYvIseWwZodLSWEgV\nE4hWpdcmmlJHGfBzA3QpdcRdclAovh9wneLv+GEy35A6XPuVUfzvRs3c3EcwC8iy\nHmuXiIcAZS8briu+FZ4OkpgdILpC9qlslrGAx7ECgYBcgZevhl6WydW4DOuVke3u\n4qTFAuxnT3Gm6hyrO5TLM6rY6zG4MLqz876zVcw0VO3Nu1WP/fIJ4rhSxTeIJk+p\nn8IvNd6IfnoeJZb0FYReUui5AvMjHvJ2cr5Nr38DPB51kQc2xSvdsjL9CVDZERWa\nrFRx2BYSkLZiFSBQP+7S9w==\n-----END PRIVATE KEY-----\n"?.replace(
            /\\n/g,
            "\n"
          ),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:B1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.email]],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (error: any) {
    return res
      .status(500)
      .send({ message: error.message ?? "Something went wrong" });
  }
}
