import request from '@/utils/request';

export  const getTodoLists = async () => {
  return request('/api/todolists');
};
export const add=async(data)=>{
  // console.log(data)
  const url='/api/todo'
  const options={
    data
  }

  return request.post(url,options)
}
export const edit=async(data)=>{
  console.log(data)
  
  const url='/api/edit'
  const options={
    data
  }

  return request.put(url,options)
}


