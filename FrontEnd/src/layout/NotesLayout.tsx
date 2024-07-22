import Header from "../components/Header";
import Input from "../components/Input";
import AddButton from "../components/AddButton";
import Note from "../components/Note";
import { useState } from "react";
export type notesType = {
  content: string;
  id: number;
};
const NotesLayout = () => {
  const [notes, setNotes]: [
    notesType[],
    React.Dispatch<React.SetStateAction<notesType[]>>
  ] = useState<notesType[]>([
    { content: "Note 1", id: 1 },
    { content: "Note 2", id: 2 },
  ]);
  const [inputNote, setInputNote]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");
  return (
    <div className="flex justify-center my-11">
      <div className="border p-3 flex flex-col rounded-md shadow-md h-96 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl min-w-[50%]">
        <Header styleProps={"font-bold text-2xl flex gap-4 p-2"} />
        <div className="flex flex-row p-2 md:gap-x-4 gap-x-1 justify-between">
          <Input
            styleProps={"h-10 border rounded-md p-3 shadow-md flex-1"}
            value={inputNote}
            setInputNote={setInputNote}
          />
          <AddButton setNotes={setNotes} inputNote={inputNote} />
        </div>
        <div className="mx-2 border-b border-slate-300 font-semibold text-start pb-1">
          Notes
        </div>
        <div className="flex flex-col px-2 overflow-y-scroll">
          <div className="overflow-scroll">
            {notes.map((note) => (
              <Note content={note.content} key={note.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesLayout;
