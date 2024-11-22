"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import Cookies from "js-cookie";

interface File {
  name: string;
  size: number;
  progress: number;
  etat: boolean;
  pause: boolean;
  cancel: boolean;
}

interface LayoutContextProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  uploadForm: boolean;
  setUploadForm: (open: boolean) => void;
  uploadFiles: File[];
  setUploadFiles: (files: File[]) => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpenState] = useState(false);
  const [uploadForm, setUploadFormState] = useState(false);
  const [uploadFiles, setUploadFilesState] = useState<File[]>([]);

  // Initialize state from cookies
  useEffect(() => {
    const savedSidebarOpen = Cookies.get("sidebarOpen");
    const savedUploadForm = Cookies.get("uploadForm");
    const savedUploadFiles = Cookies.get("uploadFiles");

    if (savedSidebarOpen) setSidebarOpenState(savedSidebarOpen === "true");
    if (savedUploadForm) setUploadFormState(savedUploadForm === "true");
    if (savedUploadFiles) setUploadFilesState(JSON.parse(savedUploadFiles));
  }, []);

  // Update cookies when state changes
  useEffect(() => {
    Cookies.set("sidebarOpen", String(sidebarOpen), { expires: 7 });
  }, [sidebarOpen]);

  useEffect(() => {
    Cookies.set("uploadForm", String(uploadForm), { expires: 7 });
  }, [uploadForm]);

  useEffect(() => {
    Cookies.set("uploadFiles", JSON.stringify(uploadFiles), { expires: 7 });
  }, [uploadFiles]);

  const setSidebarOpen = (open: boolean) => setSidebarOpenState(open);
  const setUploadForm = (open: boolean) => setUploadFormState(open);
  const setUploadFiles = (files: File[]) => setUploadFilesState(files);

  return (
    <LayoutContext.Provider
      value={{ sidebarOpen, setSidebarOpen, uploadForm, setUploadForm, uploadFiles, setUploadFiles }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }
  return context;
};
