import { baseApi } from '@/shared/api'
import { mapCategory } from '../../../../../nukeapp/src/entities/category/lib/mapCategory'
import { mapCategoryWithProducts } from '../../../../../nukeapp/src/entities/category/lib/mapCategoryWithProducts'
import { type Category, type CategoryWithProducts } from '../../../../../nukeapp/src/entities/category/model/types'
import {
  type CategoryDto,
  type CategoryWithProductsDto,
  type CategoryDetailsRequestArgs,
} from '../../../../../nukeapp/src/entities/category/api/types'

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    popularCategories: build.query<Category[], void>({
      query: () => ({
        url: `/categories/popular`,
      }),
      transformResponse: (response: CategoryDto[]) => response.map(mapCategory),
    }),
    categoryDetails: build.query<
      CategoryWithProducts,
      CategoryDetailsRequestArgs
    >({
      query: ({ sortBy, categoryId }) => ({
        url: `/categories/${categoryId}`,
        params: { sortBy, delay: 400 },
      }),
      transformResponse: (response: CategoryWithProductsDto) =>
        mapCategoryWithProducts(response),
    }),
  }),
})

export const { usePopularCategoriesQuery, useCategoryDetailsQuery } =
  categoryApi
