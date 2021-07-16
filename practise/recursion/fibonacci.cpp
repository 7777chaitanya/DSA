#include <iostream>

using namespace std;

int count = 0;

long Fib(int n)
{
    if(n == 2) count++;//this line counts the number of times F(2) is calculated while finding the nth fibonacci number
    if(n<=1) return n;
    return Fib(n-1)+Fib(n-2);
}

int main(){
    cout<<"Enter the number : ";
    int n;
    cin>>n;
    long result = Fib(n);
    cout<<result<<"\n";
    cout<<count<<" times";
}