import { trpc } from '../utils/trpc';

export function Tp() {
  const tpId = 1;
  const tp = trpc.tp
    .useQuery
    // {id: tpId,}
    ();
  console.log(JSON.stringify(tp.data));

  return <div>{JSON.stringify(tp.data)}</div>;
}
