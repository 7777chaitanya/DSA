#include <iostream>

using namespace std;

int Fib(int n)
{
    if(n<=1) return n;
    int f,f1,f2;
    f1 = 0;
    f2 = 1;
    for(int i=2;i<=n;i++){
        f = f1+f2;
        f1=f2;
        f2=f;
    }
    return f;
}

int main(){
    cout<<"Enter the number : ";
    int n;
    cin>>n;
    int result = Fib(n);
    cout<<result;
}