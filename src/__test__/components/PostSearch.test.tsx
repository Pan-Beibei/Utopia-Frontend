import { render, screen, waitFor } from "@testing-library/react";
import SearchPosts from "@/components/Post/PostSearch";
import { Provider } from "react-redux";
import Providers from "@/services/providers";
import user from "@testing-library/user-event";
import { setFilter } from "@/services/state/ForumSlice";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  forum: {
    filter: "",
  },
});

test("should submit SearchPosts form with input", async () => {
  render(
    <Provider store={store}>
      <Providers>
        <SearchPosts />
      </Providers>
    </Provider>
  );

  const inputElement = screen.getByPlaceholderText("请输入关键词搜索...");
  expect(inputElement).toBeInTheDocument();

  const searchButton = screen.getByRole("button", { name: "搜索" });
  expect(searchButton).toBeInTheDocument();

  await user.click(inputElement);
  await user.type(inputElement, "test search");

  await user.click(searchButton);

  await waitFor(() => {
    expect(store.getActions()).toContainEqual(
      setFilter(
        JSON.stringify({ title: { $regex: "test search", $options: "i" } })
      )
    );
  });
});
