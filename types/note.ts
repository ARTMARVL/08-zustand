export interface Note { 
  updatedAt: string; // Дата ласт обновы
  id: number;
  createdAt: string; // Дата создания
  content: string; // Текст заметок
  title: string; // Заголовок заметки
  tag: string;
}

export type NoteTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export interface NewNote {
  title: string;
  content?: string;
  tag: NoteTag; // Было Tag, стало NoteTag
}