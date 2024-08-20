export interface NoteObj {
  id?: string;
  title?: string;
  description?: string;
  isArchived?: boolean;
  isDeleted?: boolean;
  color?: string;
}

export interface IconsPayloadData {
  noteIdList?: string[];
  isArchived?: boolean;
  isDeleted?: boolean;
  color?: string;
}