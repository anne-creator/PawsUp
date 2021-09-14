import{Middleware}from'redux';
export const actionLog: Middleware= (store) => (next) => (action) =>{
    console.log("state current", store.getState());
    console.log('fireaction',action);
    next(action);//代替dispatch的作用
    console.log('state changed', store.getState())
}