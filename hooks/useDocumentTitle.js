import { useEffect } from "react";

function useDocumentTitle() {
  useEffect(() => {
    document.title = pageTitle;
    }, [pageTitle]);
}

export default useDocumentTitle;
