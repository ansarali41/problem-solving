//Tree Plant
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
   int n;
    cin >> n;
    if (n <= 2)
        cout << n << endl;
    else{
            long long int ans = 2;
            for (int i = 3; i <= n; i++)
                ans = ans * 1LL * 4;
            cout << ans << endl;
        }
    
    return 0;
}
