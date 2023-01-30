// Triangle
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int A,B,C;
    cin>>A>>B>>C;
    if(A==B && B==C && C==A && A>0 && B>0 && C>0)
        cout<<"Yes"<<endl;
    else
        cout<<"No"<<endl;
    return 0; 
}