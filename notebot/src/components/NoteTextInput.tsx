
"use client"
import React, { ChangeEvent, useEffect } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { useSearchParams } from 'next/navigation';
import useNote from '@/hooks/useNote';
import { updateNoteAction } from '@/action/notes';



type Props={
  noteId:string;
  startingNoteText:string;
}
let updateTimeout: NodeJS.Timeout;


const NoteTextInput = ({noteId,startingNoteText}:Props) => {

  const noteIdParam=useSearchParams().get("noteId") || "";
  const { noteText, setNoteText } = useNote();



  useEffect(() => {
    if (noteIdParam === noteId) {
      setNoteText(startingNoteText);
    }
  }, [startingNoteText, noteIdParam, noteId, setNoteText]);

  const handleUpdateNote = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setNoteText(text);

    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => {
      updateNoteAction(noteId, text);
    }, 1500);
  };



  return (
    <Textarea 
    value={noteText}
    onChange={handleUpdateNote}
    placeholder='Type your text here...'
    className="custom-scrollbar mb-4 h-full max-w-4xl resize-none border p-4 placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
    
    />
  )
}

export default NoteTextInput