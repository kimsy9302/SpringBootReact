import React, { useState } from "react";
import { postAdd } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";

const initState = {
  title: "",
  writer: "",
  dueDate: "",
};

const AddComponent = () => {
  const [todo, setTodo] = useState({ ...initState });
  const [result, setResult] = useState(null); // 결과 상태

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value; // e: 해당 입력 필드의 정보를 담고 있음
    setTodo({ ...todo }); // 스프레드 연산자를 사용하여 todo 객체를 복사한 후 새로운 객체를 생성
  };

  const handleAddClick = () => {
    postAdd(todo).then((result) => {
        console.log(result);
        setResult(result.tno); // 결과 데이터 변경
        setTodo({ ...initState }); // todo 객체를 초기화
      })
      .catch((e) => console.error(e));
  };

  const closeModal = () => {
    setResult(null);
  };

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {/* 모달 처리 */}
      {result ? (
        <ResultModal
          title={"결과 추가"}
          content={`새로운 ${result} 가 추가되었어요`}
          callbackFn={closeModal}
        />
      ) : (
        <></>
      )}
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="title"
            type={"text"}
            value={todo.title}
            onChange={handleChangeTodo}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="writer"
            type={"text"}
            value={todo.writer}
            onChange={handleChangeTodo}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">DUEDATE</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="dueDate"
            type={"date"}
            value={todo.dueDate}
            onChange={handleChangeTodo}
          ></input>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
          <button
            type="button"
            onClick={handleAddClick}
            className="rounded p-4 w-36 bg-blue-500 text-xl text-white"
          >
            {" "}
            ADD{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddComponent;
