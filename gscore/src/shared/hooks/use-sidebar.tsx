import { create } from "zustand";

interface SidebarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSidebar = create<SidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
    document.body.classList.add("overflow-hidden");
  },
  onClose: () => {
    set({ isOpen: false });
    document.body.classList.remove("overflow-hidden");
  },
}));
