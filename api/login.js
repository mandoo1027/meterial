import Util from '@/util';
 

const callLogin = (params) => {
  console.log(params)
  params.url = '/api/login'
  params.type = 'POST'
  params.data = { userId : params.userId
                  ,password :  params.password
  }
  return Util.callAjax(params)
};



export{  
  callLogin
};
