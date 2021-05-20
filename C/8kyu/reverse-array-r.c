/*
Write a function revR which reverses a given list. 
Try not to cheat and provide a recursive solution.
*/

int* revR (int* array, int n)
{
  if (n > 1)
  {
    int tmp;
    tmp = array[0];
    array[0] = array[n - 1];
    array[n - 1] = tmp;
    revR(&array[1], n - 2);
  }
  return array;
}