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
import { getCommentsByParentId } from "@/services/api/comment";

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
  getCommentsByParentId: jest.fn(),
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

  (getCommentsByParentId as jest.Mock).mockImplementation(() =>
    Promise.resolve({
      data: { comments: replies.slice(0, 3), hasMore: true },
      code: "success",
    })
  );

  await waitFor(() => {
    for (const comment of comments) {
      const commentItem = screen.getByText(comment.content);
      expect(commentItem).toBeInTheDocument();
    }

    const replyButtons = screen.getAllByRole("button", { name: "回复" });
    expect(replyButtons.length).toBe(10);

    const expandMoreNumberButtons = screen.getByText("展开4条回复");
    expect(expandMoreNumberButtons).toBeInTheDocument();

    user.click(expandMoreNumberButtons);
  });

  await waitForElementToBeRemoved(() => screen.getByText("展开4条回复"));
  await waitFor(() => {
    for (const reply of replies.slice(0, 3)) {
      const replyItem = screen.getByText(reply.content);
      expect(replyItem).toBeInTheDocument();
    }

    (getCommentsByParentId as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        data: { comments: replies.slice(3), hasMore: false },
        code: "success",
      })
    );

    const expandMoreButtons = screen.getByText("展开更多");
    expect(expandMoreButtons).toBeInTheDocument();

    const replyButtons = screen.getAllByRole("button", { name: "回复" });
    expect(replyButtons.length).toBe(13);

    user.click(expandMoreButtons);
  });

  await waitForElementToBeRemoved(() => screen.getByText("展开更多"));

  await waitFor(() => {
    for (const reply of replies) {
      const replyItem = screen.getByText(reply.content);
      expect(replyItem).toBeInTheDocument();
    }

    const collapseAllButton = screen.getByText("收起全部");
    expect(collapseAllButton).toBeInTheDocument();

    const replyButtons = screen.getAllByRole("button", { name: "回复" });
    expect(replyButtons.length).toBe(14);

    user.click(collapseAllButton);
  });

  await waitForElementToBeRemoved(() => screen.getByText("收起全部"));

  await waitFor(() => {
    const expandMoreNumberButtons = screen.getByText("展开4条回复");
    expect(expandMoreNumberButtons).toBeInTheDocument();

    const replyButtons = screen.getAllByRole("button", { name: "回复" });
    expect(replyButtons.length).toBe(10);
  });
});
