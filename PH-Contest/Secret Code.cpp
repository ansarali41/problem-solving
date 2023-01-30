//Secret Code
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int T;
    cin>>T;
    
    while(T--){
        long long int n;
        bool isSecret = true;
        cin >> n;

        // 0 and 1 are not secret code
        if (n <= 1) {
            isSecret = false;
         }

      // loop to check if n secret code
      for (int i = 2; i <= sqrt(n); ++i) {
        if (n % i == 0) {
          isSecret = false;
          break;
        }
      }

      if (isSecret)
        cout <<"Yes"<<endl;
      else
        cout <<"No"<<endl;
     }
    return 0;
}