#include <iostream>
// #include <string>

using namespace std;

string reverseString(string input){
    int length = input.length();
    if(input == "")
        return "";
    return (input.back() + reverseString(input.substr(0,length-1)));
    
}

int main(){
    string input = "GeeksForGeeks";
    string result = reverseString(input);
    cout<<"The reversed string is : \""<<result<<"\"";
    return 0;
}