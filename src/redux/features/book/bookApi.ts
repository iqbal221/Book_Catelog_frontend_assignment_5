import { api } from '../apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: builder => ({
    getBooks: builder.query({
      query: query => `/api/v1/book?searchTerm=${query}`,
    }),
    // getSearchBooks: builder.query({
    //   query: query => `/api/v1/book?searchTerm=${query}`,
    // }),
    singleBook: builder.query({
      query: id => `/api/v1/book/${id}`,
    }),
    deleteBook: builder.mutation({
      query: id => ({
        url: `/api/v1/book/${id}`,
        method: 'delete',
        headers: {
          authorization: `${localStorage.getItem('token')}`,
        },
      }),
    }),
    // getComment: builder.query({
    //   query: id => `/comment/${id}`,
    //   providesTags: ['comments'],
    // }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useDeleteBookMutation,
  // useGetSearchBooksQuery,
} = bookApi;
