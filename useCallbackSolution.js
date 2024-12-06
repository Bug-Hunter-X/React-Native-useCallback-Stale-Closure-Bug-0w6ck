```javascript
import React, { useState, useCallback } from 'react';

const MyComponent = () => {
  const [counter, setCounter] = useState(0);

  //Incorrect Usage leading to stale closure
  // const incrementCounter = useCallback(() => {
  //   setCounter(counter + 1);
  // }, []);

  // Correct Usage
  const incrementCounter = useCallback((c) => {
    setCounter(c + 1);
  }, []);

  return (
    <View>
      <Text>{counter}</Text>
      <Button title="Increment" onPress={() => incrementCounter(counter)} />
    </View>
  );
};

export default MyComponent;
```