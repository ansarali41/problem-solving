//Minimum Adjacent Sum
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    int arr[n+1];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    sort(arr, arr + n);
  
    cout<<arr[0]+arr[1];
    return 0;
}
