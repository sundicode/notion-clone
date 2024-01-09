import React from "react";
interface paramsInterface {
  params: { topicid: string };
}
const page = ({ params }: paramsInterface) => {
  return <main>{params.topicid}</main>;
};

export default page;
