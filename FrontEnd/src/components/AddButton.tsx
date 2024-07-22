import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { notesType } from "../layout/NotesLayout";
type Props = {
  setNotes: React.Dispatch<React.SetStateAction<notesType[]>>;
  inputNote: string;
};
function AddButton({ setNotes, inputNote }: Props) {
  function setInputNotes() {
    if (inputNote) {
      setNotes((prev: notesType[]) => [
        ...prev,
        { content: inputNote, id: prev.length + 1 },
      ]);
    }
  }
  return (
    <div
      className="h-10 p-3 border rounded-md bg-add-btn-color text-white font-bold flex items-center gap-x-2 shadow-md cursor-pointer"
      onClick={setInputNotes}
    >
      <FontAwesomeIcon icon={faCirclePlus} />
      <div>Add</div>
    </div>
  );
}

export default AddButton;
