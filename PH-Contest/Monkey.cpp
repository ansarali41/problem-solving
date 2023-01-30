//Monkey
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    string str;
    while (getline(cin, str)){
            sort(str.begin(), str.end());
            while (str.front() == ' ') str.erase(str.begin());
            cout << str << endl;
        }
    return 0;
}