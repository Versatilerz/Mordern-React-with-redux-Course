import { useCallback, useState } from "react";
import { useAppDispatch } from "../store/hooks";

const useThunk = (thunk: any) => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();

  const runThunk = useCallback(() => {
    setIsloading(true);
    dispatch(thunk())
      .unwrap()
      .catch((err: any) => setError(err))
      .finally(() => setIsloading(false));
  }, [dispatch, thunk]);

  return [runThunk, isLoading, error] as const;
};

export default useThunk;
