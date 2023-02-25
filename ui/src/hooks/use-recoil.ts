import { useRecoilState } from 'recoil';
import { globalState } from '@/atoms';

export default function useRecoil() {
  return useRecoilState(globalState);
}
