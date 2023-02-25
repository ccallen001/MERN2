import { atom } from 'recoil';

export default atom({
  key: 'global-state',
  default: {
    globalKey: 'globalValue'
  }
});
