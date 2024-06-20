import { useDispatch, useSelector } from 'react-redux'
import { StoreRedux } from '../../redux/Store'

export type RootState = ReturnType<typeof StoreRedux.getState>
export type AppDispatch = typeof StoreRedux.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()