import {Client} from 'appwrite'
import { atom } from 'jotai'

const client = new Client()

client
    .setEndpoint(import.meta.env.VITE_Endpoint)
    .setProject(import.meta.env.VITE_AppwriteKey)

export const apiAtom=atom(client)