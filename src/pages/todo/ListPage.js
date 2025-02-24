import React from "react";
import ListComponent from "../../components/todo/ListComponent";

const ListPage = () => {
  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">Todo List Page</div>
      <ListComponent />
    </div>
  );
};
export default ListPage;

// URL에 따라 다녀야 하는 정보
// 현재 페이지, 페이지 당 데이터 갯수
// 검색을 하면 검색어와 title, contents, writer은 URL에 따라다녀야함
