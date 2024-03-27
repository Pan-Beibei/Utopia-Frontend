import { render, screen, waitFor } from "@testing-library/react";
import PostList from "@/components/Post/PostList";
import { MemoryRouter } from "react-router-dom";
import store from "@/store/index.ts";
import { Provider } from "react-redux";
import Providers from "@/services/providers";
import { posts } from "../data/posts";

jest.mock("@/hooks/usePostsHooks", () => {
  const { posts } = jest.requireActual("../data/posts");
  const mockData = {
    pages: [{ posts }],
  };
  return {
    usePosts: () => {
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

test("PostList component should render", async () => {
  render(
    <Provider store={store}>
      <Providers>
        <MemoryRouter>
          <PostList />
        </MemoryRouter>
      </Providers>
    </Provider>
  );

  await waitFor(() => {
    for (const post of posts) {
      const postItem = screen.getByRole("heading", { name: post.title });
      expect(postItem).toBeInTheDocument();
    }

    const h4Items = screen.getAllByRole("heading", { level: 4 });
    expect(h4Items.length).toBe(10);
  });
});
