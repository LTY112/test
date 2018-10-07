
export default
{
  ayc({commit}){
      setTimeout(()=>{
            commit("add",-100);
      },800)
  }
   

}
