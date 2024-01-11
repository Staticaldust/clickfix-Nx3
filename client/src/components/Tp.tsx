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

  // Check if tpQuery.data and tpQuery.data.tp are defined before accessing them
  const tp = tpQuery.data?.tp;

  // Use a type assertion to tell TypeScript that tp is an object
  const tpValue = tp && (tp as { [key: string]: number })['2'];

  console.log(tpValue);

  return <div>{JSON.stringify(tp)}</div>;
}
