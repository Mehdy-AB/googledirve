"use client"
import DefualtLayout from "@/components/defualtLayout/DefualtLayout";
import { useLayoutContext } from "@/components/myContext/myContext";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const {
            sidebarOpen,
            setSidebarOpen,
            uploadForm,
            setUploadForm,
            setAlerts
          } = useLayoutContext();
    return (
        <DefualtLayout setSidebarOpen={setSidebarOpen} setUploadForm={setUploadForm} sidebarOpen={sidebarOpen} uploadForm={uploadForm}>
            {children}
        </DefualtLayout>
    );
}