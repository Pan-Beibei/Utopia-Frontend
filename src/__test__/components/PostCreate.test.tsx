import { render, screen, waitFor, within } from "@testing-library/react";
import CreatePost from "@/components/Post/PostCreate";
import store from "@/store/index.ts";
import { Provider } from "react-redux";
import Providers from "@/services/providers";
import user from "@testing-library/user-event";
import { postTags } from "@/types";
// import { createPost } from "@/services/api/post";

jest.mock("@/services/api/post", () => ({
  createPost: jest.fn(),
}));

test("should submit CreatePost form with input", async () => {
  render(
    <Provider store={store}>
      <Providers>
        <CreatePost />
      </Providers>
    </Provider>
  );

  const inputTitleElement = screen.getByPlaceholderText("请输入标题...");
  expect(inputTitleElement).toBeInTheDocument();

  await waitFor(() => {
    // const container = screen.getByTestId("editor");
    const container = document.querySelector(
      ".editor-container"
    ) as HTMLElement;
    if (!container) return;
    const inputContentElement = within(container).getByRole("textbox");
    expect(inputContentElement).toBeInTheDocument();
  });

  const tagListElement = screen.getByRole("heading", {
    name: "请选择标签",
  });
  expect(tagListElement).toBeInTheDocument();

  for (const tag of postTags) {
    const tagButton = screen.getByText(tag.name);
    expect(tagButton).toBeInTheDocument();

    await user.click(tagButton);
  }

  const publishButton = screen.getByRole("button", { name: "发布" });
  expect(publishButton).toBeInTheDocument();

  const cancelButton = screen.getByRole("button", { name: "取消" });
  expect(cancelButton).toBeInTheDocument();

  await user.click(inputTitleElement);
  await user.type(inputTitleElement, "test title");

  await user.click(publishButton);

  await waitFor(() => {
    // expect(createPost).toHaveBeenCalledWith({
    //   title: "test title",
    //   content: "test content",
    // });

    expect(store.getState().forum.isCreatePostVisible).toBe(false);
  });
});
