import {useState, useEffect} from "react";

// specifying that it returns tuple of the return value, and setState function
const useLocalStorageState = <T, > (key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [state, setState] = useState<T>(() => {
        let value: T;
        try {
            value = JSON.parse(
              window.localStorage.getItem(key) ||          
              JSON.stringify(defaultValue)
            )
          } catch (e) {
            console.log(e)
            value = defaultValue;
          }
          return value;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
      }, [key, state])
    
      return [state, setState];
}
    
    export default useLocalStorageState;