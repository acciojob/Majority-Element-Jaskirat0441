// arr = array of numbers
function major(arr)
{
  //your code here
  let count =1;
  let prev= arr[0];

  for(let i=0;i<arr.length;i++){
    if(count==0){
      count=1;
      prev=arr[i];
    }
    if(prev==arr[i]){
      count++;
    }
    else{
      count--;
    }
  }

  return prev;

}
module.exports=major;
