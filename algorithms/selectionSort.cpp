#include<iostream>

using namespace std;

void swap(int arr[], int iMin, int i){
    int temp=arr[iMin];
    arr[iMin]=arr[i];
    arr[i]=temp;
}

void selectionSort(int arr[], int n){
    for(int i=0;i<=n-2;i++){
        int iMin=i;
        for(int j=i+1;j<=n-1;j++){
            if(arr[j]<arr[iMin]){
                iMin=j;
            }
        }
        swap(arr,iMin,i);     
    }
}

printArr(int arr[], int n){
    int i=0;
    cout<<"The sorted Array is : ";
    while(i<n){
        cout<<arr[i]<<" ";
        i++;
    }
}

int main(){
    int arr[] = {5, 1, 4, 3, 2};
    int n = sizeof(arr)/sizeof(arr[0]);
    selectionSort(arr, n);
    printArr(arr, n);
}