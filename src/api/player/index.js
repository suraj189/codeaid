// ---------------------------------------------------------------------------------------------
// YOU CAN MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// YOU SHOULD NOT CHANGE THE EXPORTED VALUE OF THIS FILE
// ---------------------------------------------------------------------------------------------
const auth = require("../../middlewere/auth");

export default (app) => {
  app.put(
    `/player/:id`,
    require('./update').default
  );
  app.delete(
    `/player/:id`,
    require('./delete').default
  );
  app.get(
    `/player`,auth,
    require('./getList').default
  );
  app.post(
    `/player`,
    require('./create').default
  );
};