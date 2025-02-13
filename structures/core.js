//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) 
{
  return str.charAt(0).toUpperCase()+str.slice(1);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) 
{
  const len=str.length;
  return (len>n)? str.slice(0,n) + '...' : str ;
}

//Определите, пуст ли объект
function isEmpty(obj) 
{
  for (let key in obj)
    return false;
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) 
{
  for (var key in obj)
  {
    if (isFinite(obj[key])==true) 
    {
      obj[key] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) 
{
  let resultult;
  resultult = arr.reduce(function (sum,current)
  {
    return sum + current;
  },0);
  return resultult;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) 
{
  let len=str.length;
  const halfOfStr =Math.floor(len/2);
  let result=0;
  for (let i=0;i<halfOfStr;i++)
  {
    let j=len-i-1;
    if (str[i]==str[j])
      result++;
  }
  if (result==halfOfStr)
    return true;
  else 
    return false;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
