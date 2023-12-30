import { renderHook, act } from "@testing-library/react-hooks";
import { useLocalStorage } from "../exercise/04";
import { useDocumentTitle } from "../exercise/01";

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

describe("Exercise 01", () => {
  test("sets the document title", () => {
    renderHook(() => useDocumentTitle());
  });
});

describe("Exercise 04", () => {
  test("saves the value in localStorage when state is updated", () => {
    const { result } = renderHook(() => useLocalStorage("test", "old value"));

    const newValue = "new value";
    act(() => {
      result.current[1](newValue);
    });

    expect(localStorage.setItem).toHaveBeenCalledWith("test", JSON.stringify(newValue));
    expect(localStorage.__STORE__["test"]).toBe(JSON.stringify(newValue));
    expect(result.current[0]).toBe(newValue);
  });
});