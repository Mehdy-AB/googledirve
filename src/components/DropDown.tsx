import { useEffect, useRef } from "react";

interface DropDownProps {
  setIsShow: (value: boolean) => void;
  children: React.ReactNode;
}

const DropDown = ({ setIsShow, children }: DropDownProps) => {
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setIsShow(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [setIsShow]);

  return <div ref={dropDownRef}>{children}</div>;
};

export default DropDown;
