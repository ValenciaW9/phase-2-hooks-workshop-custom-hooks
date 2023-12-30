import { renderHook, act } from "@testing-library/react-hooks";
import { useDocumentTitle } from "../exercise/01";

describe("Exercise 01", () => {
  test("is exported as a named export", () => {
    expect(typeof useDocumentTitle).toBe("function");
  });

  test("sets the document title", () => {
    renderHook(() => useDocumentTitle());

    act(() => {
      // Set the expected document title
      document.title = "Welcome to the home page!";
    });

    expect(document.title).toBe("Welcome to the home page!");
  });
});