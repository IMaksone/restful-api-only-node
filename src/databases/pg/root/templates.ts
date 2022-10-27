import { templateQueryType } from "databases/types";

export const getAllTemplates: templateQueryType = () => ({
  query: "SELECT * FROM templates",
  params: [],
});

export const addTemplate: templateQueryType = (props) => ({
  query: `INSERT INTO templates (value) VALUES (${props.value})`,
  params: [],
});

export default { getAllTemplates, addTemplate };
