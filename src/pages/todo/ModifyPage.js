import { useParams } from "react-router-dom";
import ModifyComponent from "../../components/todo/ModifyComponent";

const ModifyPage = () => {

  const { tno } = useParams(); // useParams(): tno를 url에서 가져온다.
  console.log("수정페이지", tno);

  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">Todo Modify Page</div>
      <ModifyComponent tno={tno} />
    </div>
  );

};

export default ModifyPage;
