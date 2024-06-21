import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./index";

// Use throughout your app instead of plain `useDispatch` and `useSelector` ==> appearntly withtypes is not supported by redux???
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>;
// export const useAppSelector = useSelector.withTypes<RootState>;

// better approach??
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// export const useAppSelector = useSelector.withTypes<RootState>();
// export const useAppStore = useStore.withTypes<AppStore>();
