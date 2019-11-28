export default async User => {
  return new Promise(resolve => {
    User.responsible ? User.creator = true : User.creator = false;
    setTimeout(async  () => {
      User.admin = false;
      resolve(User);
    }, 2000);
  });
 
};