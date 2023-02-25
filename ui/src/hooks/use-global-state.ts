import { useRecoilState } from 'recoil';
import { globalState } from '@/atoms';

export default function useGlobalState() {
  return useRecoilState(globalState);
}
