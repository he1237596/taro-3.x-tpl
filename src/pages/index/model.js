import API from "@/services/api";
import Utils from "@/utils/utils";
import Pages from "@/utils/pages";


const initState = {}

export default {
  namespace: 'index',
  state: initState,
  effects: {
    * search({ payload }, { call, put }) {
      console.log({ payload }, { call, put })
      // try {
      //   const { medicalIndexList } = yield call(API.medical.fetchMedicalLast, payload);
      //   yield put({
      //     type: 'saveMedicalLast',
      //     payload: medicalIndexList,
      //   });
      // } catch (err) {
      //   console.log('接口请求失败', err);
      // }
    },
  },
  reducers: {},
};
