#include <iostream>
#include <cstdio>

using namespace std;

int factorial(int n){
    cout<<"I am calculating F("<<n<<")\n";
    if(n == 0)
    {
        cout<<"Done ! F("<<n<<")\n";
        return 1;
    }
    else{
        int recursiveCall = n * factorial(n-1);
        cout<<"Done ! F("<<n<<")\n";
        return recursiveCall;
    }
}

int main(){
    int n;
    cout<<"Enter the number : ";
    cin>>n;
    int result = factorial(n);
    cout<<"The result is : "<<result;
}