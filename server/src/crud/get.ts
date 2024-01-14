import { Tp } from '../models/tp';
import { User } from '../models/user';

export const getUser = async (id: number) => {
  const user = (await User.findByPk(id)).dataValues;
  if (user === null) {
    console.log('Not found!');
  } else {
    return user;
  }
};
export const getTp = async (id: number) => {
  const tp = (await Tp.findByPk(id)).dataValues;
  if (tp === null) {
    console.log('Not found!');
  } else {
    return tp;
  }
};
export const getUsers = async () => {
  const users = (await User.findAll()).map((i) => i.dataValues);

  if (users === null) {
    console.log('Not found!');
  } else {
    return users;
  }
};
export const getTps = async () => {
  const tps = (await Tp.findAll()).map((i) => i.dataValues);

  if (tps === null) {
    console.log('Not found!');
  } else {
    return tps;
  }
};

export const userAuthentication = async (email: string, password: string) => {
  let doesExist: boolean;
  const user = await User.findOne({ where: { mail_address: email } });
  if (user && user.dataValues.password === password) {
    doesExist = true;
  } else {
    doesExist = false;
  }
  return doesExist;
};

// export const deleteTps = async (id: number) => {
//   const tps = await Tp.destroy({
//     where: {
//       tp_id: id,
//     },
//   });

//   if (tps === null) {
//     console.log('Not found!');
//   } else {
//     return Boolean(tps);
//   }
// };
