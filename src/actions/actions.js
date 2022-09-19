import axios from "axios";

export const getData = async () => {
  const { data } = await axios.get(`https://raw.githubusercontent.com/danpham2906/stackline-assessment/main/src/data/stackline_frontend_assessment_data_2021.json`);
  return data;
};