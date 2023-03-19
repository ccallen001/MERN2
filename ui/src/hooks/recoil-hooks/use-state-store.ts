import { useRecoilState } from 'recoil';
import { stateStore } from '@/atoms';

export default function useStateStore() {
  return useRecoilState(stateStore);
}
