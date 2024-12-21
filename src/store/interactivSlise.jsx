import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userIp: "",
  referer: "",
  pageUrl: "",
  butterflyCount: 0,
  treeCount: 0,
  cubCount: 0,
  commentCount: 0,
  catalogCount: 0,
  contentCount: 0,



};

const interactivSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    incrementButterfly: (state) => {

      state.butterflyCount += 1;
    },
    incrementTree: (state) => {

      state.treeCount += 1;
    },
    incrementCub: (state) => {

      state.cubCount += 1;
    },
    incrementComment: (state) => {

      state.commentCount += 1;
    },
    incrementCatalog: (state) => {

        state.catalogCount += 1;
    },
    incrementContent: (state) => {

        state.contentCount += 1;
    },
    setReferer: (state, action) => {

      state.referer = action.payload.referer;
    },
    setUserIp: (state, action) => {

      state.userIp = action.payload;
    },
    setPageUrl: (state, action) => {

      state.pageUrl = action.payload.pageUrl;
    },
    removeInteractiv(state) {
        return { ...initialState };
    }

  },
});

export const { incrementButterfly, incrementTree, incrementCub, incrementComment, incrementCatalog, incrementContent, setReferer, setUserIp, setPageUrl, removeInteractiv } = interactivSlice.actions;

export default interactivSlice.reducer;