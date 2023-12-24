import { promises as fs } from 'fs';

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/data/header.json', 'utf8');
  const data = JSON.parse(file);
  return data
}