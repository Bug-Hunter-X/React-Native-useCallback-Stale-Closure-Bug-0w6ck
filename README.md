## React Native useCallback Stale Closure Bug

This repository demonstrates a common bug encountered when using the `useCallback` hook in React Native. The bug arises from stale closures where the memoized function retains old state values, resulting in unexpected behavior. The example showcases this issue and provides a solution using proper dependency handling.

**Bug:** The `incrementCounter` function, memoized with `useCallback`, does not update when `counter` changes because it directly captures `counter`'s initial value. 

**Solution:** The problem is solved by passing `counter` as an argument to `incrementCounter`, forcing it to always use the most up-to-date value.