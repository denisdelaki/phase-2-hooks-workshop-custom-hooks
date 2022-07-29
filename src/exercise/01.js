import { useEffect } from "react";

/* ✅ create a new function called useDocumentTitle */
export function useDocumentTitle() {
  useEffect(() => {
    const [title, setTitle] = useDocumentTitle(`title`)
    setTitle(title)
  }, []);

}
/* 👀 export function useDocumentTitle() {} */

export default function Home() {
  /* 
    ✅ move the useEffect code into your useDocumentTitle function
   then, call the useDocumentTitle hook in your component
  */
  useDocumentTitle()
  return (
    <div>
      <h1>Home Page</h1>

      <p>
        To see the title change in the browser tab, click the 'Open in new tab'
        link above
        {useDocumentTitle}
      </p>
    </div>
  );
}
