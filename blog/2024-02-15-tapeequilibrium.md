---
slug: tapeequilibrium
title: "TapeEquilibrium"
tags: [codility]
---

https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(vector<int> &A)
{
    int n = A.size();
    int head = A[0];
    int tail = accumulate(A.begin() + 1, A.end(), 0);

    int minDiff = abs(head - tail);

    for (int i = 1; i < n - 1; ++i)
    {
        head += A[i];
        tail -= A[i];
        int cur = abs(head - tail);
        minDiff = min(minDiff, cur);
    }
    return minDiff;
}
```

- T: $O(N)$
- S: $O(1)$
