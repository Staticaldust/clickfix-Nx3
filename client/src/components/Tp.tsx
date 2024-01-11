// import { trpc } from '../utils/trpc';

// export function Tp() {
//   const tpId = 1;
//   const tp = trpc.tp.useQuery().data?.tp;
//   // {id: tpId,}
//   console.log(tp[2]);

//   return <div>{JSON.stringify(tp)}</div>;
// }
import { trpc } from '../utils/trpc';

export function Tp() {
  const tpId = 1;
  const tpQuery = trpc.tp.useQuery();

  const tp = tpQuery.data?.tp;

  return (
    <div>
      <div>{JSON.stringify(tp)}</div>
    </div>
  );
}
