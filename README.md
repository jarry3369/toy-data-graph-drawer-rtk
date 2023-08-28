## 프로젝트 설명

그래프 그리기

[네이버 오픈 API 데이터랩( 쇼핑인사이트 )](https://developers.naver.com/docs/serviceapi/datalab/shopping/shopping.md#%EC%87%BC%ED%95%91%EC%9D%B8%EC%82%AC%EC%9D%B4%ED%8A%B8-%ED%82%A4%EC%9B%8C%EB%93%9C-%EC%97%B0%EB%A0%B9%EB%B3%84-%ED%8A%B8%EB%A0%8C%EB%93%9C-%EC%A1%B0%ED%9A%8C)에서 제공하는 API

```javascript
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (dispatch) => {
    return await fetch(
      "https://openapi.naver.com/v1/datalab/shopping/category/keyword/age",
      {
        method: "POST",
        body: JSON.stringify(dispatch),
        headers: {
          "X-Naver-Client-Id": process.env.REACT_APP_CLIENTID,
          "X-Naver-Client-Secret": process.env.REACT_APP_CLIENTSECRET,
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  }
);
```

를! 가공해다가 아래처럼 그려주면 끝

![ewfuea](https://user-images.githubusercontent.com/25889048/155288719-5e4caa01-6784-4660-a612-59ea05bf67fb.gif)

## HOW TO START

`npm start`
