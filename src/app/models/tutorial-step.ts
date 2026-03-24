export interface TutorialStep {
  type: 'explanation' | 'task';
  id: string;
  linkedTaskId?: string;
  linkedExplanationId?: string;

  imageUrl?: string;
  text?: string;
  textPosition?: string;
  zones?: { x: string; y: string; width: string; height: string; color?: string  }[];
  successText?: string;
  successImageUrl?: string;
}