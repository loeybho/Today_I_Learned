# useMemo

지정한 함수를 호출해서 반환 받은 결과값을 내부에 저장(캐싱)하고 있는 함수

## API

```
const calculateValue = function(){...};
const cachedValue = useMemo(calculateValue, dependencies);
```
