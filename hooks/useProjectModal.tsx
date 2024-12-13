import { create } from 'zustand';
import { CardProps } from '@/data';

interface ProjectModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  card: CardProps | null;
  setCard: (card: CardProps | null) => void;
}

const useProjectModal = create<ProjectModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  card: null,
  setCard: (card: CardProps | null) => set({ card: card })
}));

export default useProjectModal;