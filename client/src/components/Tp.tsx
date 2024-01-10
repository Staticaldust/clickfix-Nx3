import { log } from 'console';
import { trpc } from '../utils/trpc';

export function Tps() {
  const tps = trpc.tps.useQuery();
  return <div>{JSON.stringify(tps.data?.tps)}</div>;
}
