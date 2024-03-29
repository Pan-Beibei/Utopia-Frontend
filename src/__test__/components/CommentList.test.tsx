import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import CommentList from "@/components/Comment/CommentList";
import { comments, replies } from "../data/comments";
import { MemoryRouter } from "react-router-dom";
import store from "@/store/index.ts";
import { Provider } from "react-redux";
import Providers from "@/services/providers";
import user from "@testing-library/user-event";

jest.mock("@/hooks/useCommentsHook", () => {
  const { comments } = jest.requireActual("../data/comments");
  const mockData = {
    pages: [{ comments }],
  };
  return {
    useComments: () => {
      return {
        data: mockData,
        isError: false,
        isLoading: false,
        fetchNextPage: jest.fn(),
        hasNextPage: true,
        isFetchingNextPage: false,
      };
    },
  };
});

jest.mock("@/services/api/comment", () => ({
  getCommentsByParentId: jest.fn(() =>
    Promise.resolve({
      data: { comments: replies, hasMore: false },
      code: "success",
    })
  ),
}));

test("should correctly render CommentList component with expected number of comments", async () => {
  render(
    <Provider store={store}>
      <Providers>
        <MemoryRouter>
          <CommentList postId="1" />
        </MemoryRouter>
      </Providers>
    </Provider>
  );

  await waitFor(() => {
    for (const comment of comments) {
      const commentItem = screen.getByText(comment.content);
      expect(commentItem).toBeInTheDocument();
    }

    const replyButtons = screen.getAllByRole("button", { name: "回复" });
    expect(replyButtons.length).toBe(10);

    const expandMoreButtons = screen.getByText("展开2条回复");
    expect(expandMoreButtons).toBeInTheDocument();

    user.click(expandMoreButtons);
  });

  await waitForElementToBeRemoved(() => screen.getByText("展开2条回复"));
  await waitFor(() => {
    for (const reply of replies) {
      const replyItem = screen.getByText(reply.content);
      expect(replyItem).toBeInTheDocument();
    }

    const replyButtons = screen.getAllByRole("button", { name: "回复" });
    expect(replyButtons.length).toBe(12);
  });
});
