function Note({ content }: { content: string }) {
  return (
    <div className="border-b border-slate-300 text-start py-2 text-wrap">
      {content}
    </div>
  );
}

export default Note;
