// BASE_URL
// export const BASE_URL = "http://127.0.0.1:7000";
// export const BASE_URL = "http://localhost:3000/api/v1/util/delivery";
export const BASE_URL = "https://server.sharedrop.store/api/v1/util/delivery";

// 택배사 조회
// export const GET_COMPANY = `/api/${BASE_URL}/companylist`;
export const GET_COMPANY = `${BASE_URL}/companylist`;

// 운송장 번호 조회
// export const GET_TRACKING_INFO = `/api/${BASE_URL}/tracking?t_key=SWEETTRACKER`;
export const GET_TRACKING_INFO = `${BASE_URL}/tracking`;
