//Dracula and Blood
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int t;
    cin >> t;
    while (t--) {
            string s;
            cin >> s;
            reverse(s.begin(), s.end());
            s += '0';
            int ans = 0, sz = s.size(), cnt = 0;
            vector<int> v;
            for (int i = 0; i < sz; i++){
                    if (s[i] == '0')
                        {
                            if (cnt > 0)
                                v.push_back(cnt);
                            cnt = 0;
                        }
                    else
                        cnt++;
                }
            sort(v.begin(), v.end(), greater<int>());
            for (int i = 0; i < v.size(); i += 2)
                ans += v[i];
            cout << ans << endl;
        }   
    return 0;
}
