import "whatwg-fetch";
import { renderHook } from "@testing-library/react-hooks/pure";
import { server } from "../data/mocks/server";
import { usePokemon } from "../exercise/02";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Exercise 02", () => {
  test("returns an initial state of null", () => {
    const { result } = renderHook(() => usePokemon("charmander"));
    expect(result.current).toEqual({ data: null, errors: null, status: "pending" });
  });

  test("returns a pokemon based on the search result after fetching data", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      usePokemon("charmander")
    );

    await waitForNextUpdate();

    expect(result.current).toEqual({
      data: {
        id: 4,
        name: "charmander",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        },
      },
      errors: null,
      status: "fulfilled",
    });
  });
});